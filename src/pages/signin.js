import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { toast } from 'react-toastify';
import { CircularProgress } from '@material-ui/core';
import { useStyles } from '../styles/styles';
import Layout from '../components/hoc/index';
import Input from '../components/input';
import { useAuth } from '../lib/hooks/useAuth';

function Signin() {
  const classes = useStyles();
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/home'), [history]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error, token, dispatchSignin } = useAuth();

  useEffect(() => {
    if (error) {
      toast.error('Signin failed');
    }
    if (token) {
      handleOnClick();
    }
  }, [error, token]);

  const handleClick = () => {
    dispatchSignin({ email, password });
  };

  const drawer = (
    <div style={{ height: '90%' }}>
      <div className={classes.headerDrawer}>
        Support
        <br />
        Group
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>
        <FormControl className={classes.margin}>
          <InputLabel className={classes.inputLabeL} shrink>
            Email
          </InputLabel>
          <Input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" id="bootstrap-input" />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel className={classes.inputLabeL} shrink>
            Password
          </InputLabel>
          <Input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" id="bootstrap-input" />
        </FormControl>
        {loading ? (
          <>
            <br />
            <CircularProgress color="inherit" />
          </>
        ) : (
          <Button
            style={{ color: 'black', marginTop: 10 }}
            disabled={email === '' || password === ''}
            onClick={() => handleClick()}
            variant="contained"
            className={classes.button}>
            Sign in
          </Button>
        )}
        <span style={{ marginTop: 5 }}>
          No account? <Link to="signup">Sign up here</Link>{' '}
        </span>
      </div>
    </div>
  );

  const main = (
    <>
      <img
        style={{ height: '105vh', zIndex: -1, filter: 'grayscale(20%)' }}
        src="/support-group.jpeg"
        alt="Support Group"
      />
      <div style={{ position: 'absolute', left: '50%', top: '40vh', transform: 'translate(-50%, -50%)', color: 'white', fontSize: 80 }}>Welcome</div>
    </>
  );

  return <Layout drawer={drawer}>{main}</Layout>;
}

export default Signin;
