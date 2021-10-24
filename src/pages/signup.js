import React, { useEffect, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CircularProgress } from '@material-ui/core';
import Layout from '../components/hoc/index';
import Input from '../components/input';
import ColorSchema from '../styles/color';
import { useAuth } from '../lib/hooks/useAuth';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      display: 'none',
    },
    backgroundColor: ColorSchema.primary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: ColorSchema.primary,
  },
  content: {
    flexGrow: 1,
    margin: 0,
    overflow: 'hidden',
    height: '100vh',
    position: 'relative',
  },
  button: {
    backgroundColor: ColorSchema.button,
    color: 'white',
    margin: 'auto',
  },
  headerDrawer: {
    fontSize: 40,
    paddingLeft: 30,
    paddingTop: 20,
    fontWeight: 'bold',
  },
  margin: {
    margin: theme.spacing(1),
  },
  inputLabeL: {
    fontSize: 20,
    fontWeight: 'bold',
  },
}));

function Signup() {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { loading, error, token, dispatchSignup } = useAuth();

  useEffect(() => {
    if (error) {
      toast.error('Signup failed');
    }
    if (token) {
      history.push('/home');
    }
  }, [error, token]);

  const handleSignup = () => {
    dispatchSignup({ email, password });
  };

  const drawer = (
    <div style={{ height: '90%' }}>
      <div className={classes.headerDrawer}>
        Support
        <br />
        Group
      </div>
      <div className={classes.headerDrawer} style={{ color: 'white', fontWeight: 'bold' }}>
        Sign up
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>
        <FormControl className={classes.margin}>
          <InputLabel className={classes.inputLabeL} shrink htmlFor="bootstrap-input">
            Email
          </InputLabel>
          <Input onChange={(event) => setEmail(event.target.value)} placeholder="Email" id="bootstrap-input" />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel className={classes.inputLabeL} shrink htmlFor="bootstrap-input">
            Password
          </InputLabel>
          <Input onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" id="bootstrap-input" />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel className={classes.inputLabeL} shrink htmlFor="bootstrap-input">
            Confirm Password
          </InputLabel>
          <Input onChange={(event) => setConfirmPassword(event.target.value)} type="password" placeholder="Confirm Password" id="bootstrap-input" />
        </FormControl>
        {loading ? (
          <>
            <br />
            <CircularProgress color="inherit" />
          </>
        ) : (
          <Button
            style={{ color: 'black', marginTop: 10 }}
            disabled={email === '' || password === '' || confirmPassword === '' || password !== confirmPassword}
            onClick={handleSignup}
            variant="contained"
            className={classes.button}>
            Sign up
          </Button>
        )}
        <span style={{ marginTop: 5 }}>
          Already got an account? <Link to="">Sign in here</Link>
        </span>
      </div>
    </div>
  );

  const main = (
    <>
      <img
        style={{ height: '105vh', zIndex: -1, filter: 'grayscale(20%)' }}
        src="https://s3-alpha-sig.figma.com/img/becd/b85e/2d68f0d0d3bc8944d250e65ec0432678?Expires=1632700800&Signature=fO8~tgADk7CmcaCJhPeP5wTMPUVKzMbnKet2u0Tz2ikt7MTKliF0J32H4jQStHr6YqSDAjZ6OnVrLBuHeKbo16ShSJethXF7HRDHiw9dYIeyowabyW9D5w83veSkcBRzj9XRhNV~-MuwT4H8h-Yt3vEjW6uM-FC-8ybmu9yLDhHzhoF3nu9UAPlUFelDga3GkK5pR~nQPe1xAoqpwV99ClcdSnMWRZZCJVipYSJ5OxFxRkz-moUKjx4nMC-NyuR4r5UFYt1~OgXi53jBQP5KwaMcupcFuxw1wiKQqdswLcQFXFRK23AloZb6TRndT4GvMGsxPBQ0BmJXmKuRSRFooQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt="Support Group"
      />
      <div style={{ position: 'absolute', left: '50%', top: '40vh', transform: 'translate(-50%, -50%)', color: 'white', fontSize: 80 }}>Welcome</div>
    </>
  );

  return <Layout drawer={drawer}>{main}</Layout>;
}

export default Signup;
