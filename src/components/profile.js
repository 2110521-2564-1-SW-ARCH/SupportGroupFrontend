import React from "react";
import PropTypes from "prop-types";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            height: "9vh",
            display: "flex",
            justifyContent: "space-evenly"
        },
    })
);

export const Profile = ({ photoURL = "https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c", displayName = "anonymous" }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Avatar
                style={{ width: "70px", height: "70px" }}
                alt={displayName}
                className={classes.orange}
                src={photoURL}
            />
            <h1>{displayName}</h1>
        </div>
    )
}

Profile.propTypes = {
    photoURL: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
}