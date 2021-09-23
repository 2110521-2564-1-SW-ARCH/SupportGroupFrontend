import React from "react";
import PropTypes from "prop-types";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            width: "250px",
            height: "300px",
        },
        text: {
            color: "white"
        }
    })
);

export const AudioProfile = ({ photoURL = "https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c", displayName = "anonymous" }) => {
    const classes = useStyles();

    return (
        <center>
            <div className={classes.container}>
                <Avatar
                    style={{ width: "200px", height: "200px" }}
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