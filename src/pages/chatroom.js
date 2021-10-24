import React, { useEffect, useRef, useState, useCallback } from 'react';
import io from 'socket.io-client';
import Peer from 'simple-peer';
import * as Chance from 'chance';
import PropTypes from "prop-types";
import { useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux'

import Divider from '@mui/material/Divider';
import Button from '@material-ui/core/Button';
import { ImPhoneHangUp } from 'react-icons/im';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useStyles } from '../styles/styles';
import ColorSchema from '../styles/color';

import Layout from '../components/hoc/index';

import { ChatBox } from '../components/chat/chatbox';
import { Profile } from '../components/profile';
import { AudioProfile } from '../components/audio/audioprofile';

import Video from '../components/video';

import { User } from '../chat_pb';
import { ChatServiceClient } from '../chat_grpc_web_pb';

const chance = new Chance();

export const client = new ChatServiceClient('http://localhost:8080', null, null);

const ChatRoom = ({ match: { params: roomId } }) => {
  const classes = useStyles();

  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/'), [history]);

  const email = useSelector((state) => state.auth.email)

  const userDetails = {
    id: chance.guid(),
    name: email,
  };
  const [peers, setPeers] = useState([]);

  const socketRef = useRef();
  const refVideo = useRef();
  const peersRef = useRef([]);

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 960) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }
    window.addEventListener('resize', handleResize);
  });

  function createPeer(userToSignal, callerId, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on('signal', (signal) => {
      socketRef.current.emit('initiate-signal', {
        userToSignal,
        callerId,
        signal,
      });
    });

    return peer;
  }

  function addPeer(incomingSignal, callerId, stream) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on('signal', (signal) => {
      socketRef.current.emit('ack-signal', { signal, callerId });
    });

    peer.signal(incomingSignal);

    return peer;
  }

  useEffect(() => {
    let tracks
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        refVideo.current.srcObject = stream;
        tracks = stream.getTracks();

        socketRef.current = io.connect("http://localhost:5000");

        // sending the user details and roomid to join in the room
        socketRef.current.emit('join-room', roomId, userDetails);

        socketRef.current.on('users-present-in-room', (users) => {
          const peers = [];

          // To all users who are already in the room initiating a peer connection
          users.forEach((user) => {
            const peer = createPeer(
              user.socketId,
              socketRef.current.id,
              stream
            );

            peersRef.current.push({
              peerId: user.socketId,
              peer,
              name: user.name,
            });

            peers.push({
              peerId: user.socketId,
              peerObj: peer,
            });
          });

          setPeers(peers);
        });

        // once the users initiate signal we will call add peer
        // to acknowledge the signal and send the stream
        socketRef.current.on('user-joined', (payload) => {
          const peer = addPeer(payload.signal, payload.callerId, stream);
          peersRef.current.push({
            peerId: payload.callerId,
            peer,
            name: payload.name,
          });

          setPeers((users) => [
            ...users,
            { peerId: payload.callerId, peerObj: peer },
          ]);
        });

        // once the signal is accepted calling the signal with signal
        // from other user so that stream can flow between peers
        socketRef.current.on('signal-accepted', (payload) => {
          const item = peersRef.current.find((p) => p.peerId === payload.id);
          item.peer.signal(payload.signal);
        });

        // if some user is disconnected removing his references.
        socketRef.current.on('user-disconnected', (payload) => {
          const item = peersRef.current.find((p) => p.peerId === payload);
          if (item) {
            item.peer.destroy();
            peersRef.current = peersRef.current.filter(
              (p) => p.peerId !== payload
            );
          }
          setPeers((users) => users.filter((p) => p.peerId !== payload));
        });
      });
    // socketRef.current.emit('disconnect')
    return () => { socketRef.current.disconnect(); tracks[0].stop() }
  }, []);

  const joinChatHandler = () => {
    const _username = email;

    const user = new User();
    user.setId(Date.now());
    user.setName(_username);

    client.join(user, null, (err, response) => {
      if (err) return console.log(err);
      const error = response.getError();
      const msg = response.getMsg();

      if (error === 1) {
        console.log(error, msg);
        return err;
      }
      console.log(error, msg);
      return err;
    });
  };

  useEffect(() => {
    joinChatHandler();
  }, []);

  const drawer = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
      <div className={classes.headerDrawer}>Chat</div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ChatBox client={client} />
      </div>
      <Divider />
      <Profile photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c" displayName={email} />
    </div>
  );

  const main = (
    <div>
      <div style={{ position: 'absolute', backgroundColor: ColorSchema.chatBackground, width: '100vw', height: '110vh', zIndex: -1 }} />
      <div style={{ width: '80%', paddingTop: mobile ? '10vh' : '15vh', marginLeft: mobile ? '2vw' : '5%' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={mobile ? 0 : 12}>
            <Grid item xs={mobile ? 6 : 4}>
              <AudioProfile displayName={email} />
            </Grid>

            {peers.map((peer, index) => {
              return (
                <Grid key={peersRef.current[index].peerId} item xs={mobile ? 6 : 4}>
                  <Video
                    key={peersRef.current[index].peerId}
                    peer={peer.peerObj}
                    name={peersRef.current[index].name}
                  />
                </Grid>
              );
            })}
            <div style={{
              position: "absolute"
            }}>
              <video muted ref={refVideo} autoPlay playsInline />
            </div>
          </Grid>
        </Box>
      </div>
      <Button
        onClick={handleOnClick}
        style={{
          position: 'absolute',
          left: mobile ? '91%' : '93%',
          top: '93%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'red',
          width: '75px',
          height: '50px',
          borderRadius: '25px',
        }}>
        <ImPhoneHangUp style={{ color: 'white', width: '50px', height: '30px' }} />
      </Button>
    </div >
  );

  return <Layout drawer={drawer}>{main}</Layout>;
};

ChatRoom.propTypes = {
  match: PropTypes.object.isRequired,
}

export default ChatRoom;
