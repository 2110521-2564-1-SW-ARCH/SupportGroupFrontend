import {React, useRef} from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapForm: {
      display: 'flex',
      justifyContent: 'center',
      width: '95%',
      margin: `${theme.spacing(0)} auto`,
    },
    wrapText: {
      width: '100%',
    },
    button: {
      // margin: theme.spacing(1),
    },
  }),
);

export const ChatInput = ({sendMessage}) => {
  const classes = useStyles();
  const inputRef = useRef(null);

  const sendMessageHandler = (event) => {
    event.preventDefault();

    const msg = inputRef.current.value;
    // console.log(msg);
    sendMessage(msg);
    inputRef.current.value = '';
  };

  return (
    <>
      <Box component="form" className={classes.wrapForm} onSubmit={sendMessageHandler} noValidate autoComplete="off">
        <TextField
          //   id="message"
          inputRef={inputRef}
          defaultValue=""
          type="text"
          label="enter message"
          className={classes.wrapText}
          // margin="normal"
        />
        <Button variant="contained" color="primary" className={classes.button} type="submit">
          <SendIcon />
        </Button>
      </Box>
    </>
  );
};

ChatInput.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};
