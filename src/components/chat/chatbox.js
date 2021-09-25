import {
  React,
  useState,
  useEffect
} from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'

import { ReceiveMsgRequest, ChatMessage } from '../../chat_pb';
import { ChatInput } from './chatinput';
import { MessageLeft } from './message';


const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      width: '350px',
      height: '70vh',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      position: 'relative',
    },
    container: {
      height: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    messagesBody: {
      width: 'calc( 100% - 20px )',
      margin: 10,
      overflowY: 'scroll',
      height: 'calc( 100% - 80px )',
    },
  }),
);

export const ChatBox = ({ client }) => {
  const classes = useStyles();
  const [msgList, setMsgList] = useState([]);
  const username = useSelector((state) => state.auth.email)

  useEffect(() => {
    const strRq = new ReceiveMsgRequest();
    strRq.setUser(username);

    const chatStream = client.receiveMsg(strRq, {});
    chatStream.on("data", (response) => {
      const from = response.getFrom();
      const msg = response.getMsg();
      const time = response.getTime();
      // console.log(response.toObject())
      console.log(`sending friend msg: ${msg}`, `from: ${from}`);

      if (from === username) {
        setMsgList((oldArray) => [
          ...oldArray,
          { from, msg, time, mine: true },
        ]);
      } else {
        setMsgList((oldArray) => [...oldArray, { from, msg, time }]);
      }
    });

    chatStream.on("status", (status) => {
      console.log(status)
      console.log(status.code, status.details, status.metadata);
    });

    chatStream.on("end", () => {
      console.log("Stream ended.");
    });
  }, []);

  const sendMessage = (message) => {
    const msg = new ChatMessage();
    msg.setMsg(message);
    msg.setFrom(username);
    msg.setTime(new Date().toLocaleString());
    client.sendMsg(msg, null, (err, response) => {
      console.log(response);
    });
  }
  return (
    <div className={classes.container}>
      <Paper className={classes.paper} zdepth={2}>
        <Paper id="style-1" className={classes.messagesBody}>
          {msgList?.map((chat, i) => {
            // eslint-disable-next-line react/no-array-index-key
            return < MessageLeft {...chat} key={i} />;
          })}
          {/* <MessageLeft
            message="あめんぼあかいなあいうえお"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName=""
          /> */}
        </Paper>
        <ChatInput sendMessage={sendMessage} />
      </Paper>
    </div>
  );
};

ChatBox.propTypes = {
  //   msgList: PropTypes.array.isRequired,
  //   sendMessage: PropTypes.func.isRequired,
  client: PropTypes.any.isRequired,
};
