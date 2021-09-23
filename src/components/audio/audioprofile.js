import React from "react";
import PropTypes from "prop-types";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            width: "20vw",
            height: "30vh",
        },
        text: {
            color: "white",
            fontSize: 25,
        }
    })
);

export const AudioProfile = ({ photoURL = "https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c", displayName = "anonymous" }) => {
    const classes = useStyles();

    return (
        <center>
            <div className={classes.container}>
                <Avatar
                    style={{ width: "20vh", height: "20vh" }}
                    alt={displayName}
                    className={classes.orange}
                    src={photoURL}
                />
                <h1 className={classes.text}>{displayName}</h1>
            </div>
        </center>
    )
}

AudioProfile.propTypes = {
    photoURL: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
}