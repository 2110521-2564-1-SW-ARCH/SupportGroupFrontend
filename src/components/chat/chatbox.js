import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { ChatInput } from "./chatinput";
import { MessageLeft } from "./message";

const useStyles = makeStyles(() =>
    createStyles({
        paper: {
            width: "350px",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            position: "relative"
        },
        container: {
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        messagesBody: {
            width: "calc( 100% - 20px )",
            margin: 10,
            overflowY: "scroll",
            height: "calc( 100% - 80px )"
        }
    })
);

export const ChatBox = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Paper className={classes.paper} zDepth={2}>
                <Paper id="style-1" className={classes.messagesBody}>
                    <MessageLeft
                        message="あめんぼあかいなあいうえお"
                        timestamp="MM/DD 00:00"
                        photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                        displayName=""
                    />
                    <MessageLeft
                        message="xxxxxhttps://yahoo.co.jp xxxxxxxxxあめんぼあかいなあいうえおあいうえおかきくけこさぼあかいなあいうえおあいうえおかきくけこさぼあかいなあいうえおあいうえおかきくけこさいすせそ"
                        timestamp="MM/DD 00:00"
                        photoURL=""
                        displayName="テスト"
                        avatarDisp={false}
                    />
                    <MessageLeft
                        message="messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえおあめんぼあかいなあいうえお"
                        timestamp="MM/DD 00:00"
                        photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                        displayName="まさりぶ"
                    />
                    <MessageLeft
                        message="messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえお"
                        timestamp="MM/DD 00:00"
                        photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                        displayName="まさりぶ"
                    />
                    <MessageLeft
                        message="あめんぼあかいなあいうえお"
                        timestamp="MM/DD 00:00"
                        photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                        displayName=""
                    />
                    <MessageLeft
                        message="xxxxxhttps://yahoo.co.jp xxxxxxxxxあめんぼあかいなあいうえおあいうえおかきくけこさぼあかいなあいうえおあいうえおかきくけこさぼあかいなあいうえおあいうえおかきくけこさいすせそ"
                        timestamp="MM/DD 00:00"
                        photoURL=""
                        displayName="テスト"
                        avatarDisp={false}
                    />
                    <MessageLeft
                        message="messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえおあめんぼあかいなあいうえお"
                        timestamp="MM/DD 00:00"
                        photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                        displayName="まさりぶ"
                    />
                    <MessageLeft
                        message="messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえお"
                        timestamp="MM/DD 00:00"
                        photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                        displayName="まさりぶ"
                    />
                </Paper>
                <ChatInput />
            </Paper>
        </div>
    );
}
