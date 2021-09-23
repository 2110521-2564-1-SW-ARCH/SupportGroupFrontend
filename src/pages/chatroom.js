import React, { useState, useEffect } from 'react';

import Divider from '@mui/material/Divider';
import Button from '@material-ui/core/Button';
import { ImPhoneHangUp } from "react-icons/im";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useStyles } from '../styles/styles';
import ColorSchema from '../styles/color';

import Layout from '../components/hoc/index';

import { ChatBox } from '../components/chat/chatbox';
import { Profile } from '../components/profile';
import { AudioProfile } from '../components/audio/audioprofile';

function ChatRoom() {
    const classes = useStyles();

    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 960) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        }

        window.addEventListener('resize', handleResize)
    })

    const drawer = (
        <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
            <div className={classes.headerDrawer}>
                Chat
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                <ChatBox />
            </div>
            <Divider />
            <Profile />
        </div >
    );

    const main = (
        <div>
            <div style={{ position: "absolute", backgroundColor: ColorSchema.chatBackground, width: "100vw", height: "110vh", zIndex: -1 }} />
            <div style={{ width: "80%", paddingTop: mobile ? "10vh" : "15vh", marginLeft: mobile ? "2vw" : "5%", }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={mobile ? 0 : 12}>
                        <Grid item xs={mobile ? 6 : 4}>
                            <AudioProfile />
                        </Grid>
                        <Grid item xs={mobile ? 6 : 4}>
                            <AudioProfile />
                        </Grid>
                        <Grid item xs={mobile ? 6 : 4}>
                            <AudioProfile />
                        </Grid>
                        <Grid item xs={mobile ? 6 : 4}>
                            <AudioProfile />
                        </Grid>
                        <Grid item xs={mobile ? 6 : 4}>
                            <AudioProfile />
                        </Grid>
                        <Grid item xs={mobile ? 6 : 4}>
                            <AudioProfile />
                        </Grid>
                    </Grid>
                </Box>
            </div> */
            <Button style={{ position: "absolute", left: mobile ? "91%" : "93%", top: "93%", transform: "translate(-50%, -50%)", backgroundColor: "red", width: "75px", height: "50px", borderRadius: "25px" }} >
                <ImPhoneHangUp style={{ color: "white", width: "50px", height: "30px", }} />
            </Button>
        </div>
    );

    return (
        <Layout drawer={drawer}>{main}</Layout>
    );
}

export default ChatRoom;
