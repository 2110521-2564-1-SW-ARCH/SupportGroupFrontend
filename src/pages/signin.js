import React, { useState } from 'react';

import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

import { useStyles } from '../styles/styles';

import { signin } from "../redux/auth/action";

import Layout from '../components/hoc/index';
import Input from '../components/input';

function Signin() {
    const classes = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => {
        dispatch(signin({ email, password }));
        history.push("/chat");
    }

    const drawer = (
      <div style={{height: '90%'}}>
        <div className={classes.headerDrawer}>
          Support
          <br />
          Group
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <FormControl className={classes.margin}>
            <InputLabel className={classes.inputLabeL} shrink>
              Email
            </InputLabel>
            <Input onChange={(event) => setEmail(event.target.value)} placeholder="Email" id="bootstrap-input" />
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel className={classes.inputLabeL} shrink>
              Password
            </InputLabel>
            <Input onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" id="bootstrap-input" />
          </FormControl>
          <Button
            style={{color: 'black'}}
            disabled={email === '' || password === ''}
            onClick={() => handleClick()}
            variant="contained"
            className={classes.button}>
            Sign in
            </Button>
            <span> No account? <Link to=''>Sing up here.</Link> </span>
        </div>
      </div>
    );

    const main = (
        <>
            <img style={{ height: "105vh", zIndex: -1, filter: "grayscale(20%)" }} src="https://s3-alpha-sig.figma.com/img/becd/b85e/2d68f0d0d3bc8944d250e65ec0432678?Expires=1632700800&Signature=fO8~tgADk7CmcaCJhPeP5wTMPUVKzMbnKet2u0Tz2ikt7MTKliF0J32H4jQStHr6YqSDAjZ6OnVrLBuHeKbo16ShSJethXF7HRDHiw9dYIeyowabyW9D5w83veSkcBRzj9XRhNV~-MuwT4H8h-Yt3vEjW6uM-FC-8ybmu9yLDhHzhoF3nu9UAPlUFelDga3GkK5pR~nQPe1xAoqpwV99ClcdSnMWRZZCJVipYSJ5OxFxRkz-moUKjx4nMC-NyuR4r5UFYt1~OgXi53jBQP5KwaMcupcFuxw1wiKQqdswLcQFXFRK23AloZb6TRndT4GvMGsxPBQ0BmJXmKuRSRFooQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Support Group" />
            <div style={{ position: "absolute", left: "50%", top: "40vh", transform: "translate(-50%, -50%)", color: "white", fontSize: 80 }}>
                test
            </div>
        </>
    );

    return (
        <Layout drawer={drawer}>{main}</Layout>
    );
}

export default Signin;
