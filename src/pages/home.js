/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';

import {useDispatch} from 'react-redux';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

import {useStyles} from '../styles/styles';

import {signin} from '../redux/auth/action';

import Layout from '../components/hoc/index';
import Input from '../components/input';

import {subscribe} from '../utils/socket-api';

function Home() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [category, setCategory] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    subscribe((result) => {
      setSocket(result);
    });
  });

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleSearchRoom = async (event) => {
    // fetch('http://localhost:5555/api/queue', {method: 'GET'});
    event.preventDefault();
    try {
      const params = new URLSearchParams();
      params.append('category', category);
      const res = await fetch('http://localhost:5555/api/queue', {
        method: 'POST',
        body: params,
      });
      const response = await res.json();
      const message = await response.message;
      console.log(message);
    } catch (error) {
      console.log(error);
    }
  };

  const drawer = (
    <div style={{height: '90%'}}>
      <div className={classes.headerDrawer}>
        Support
        <br />
        Group
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'space-between', justifyContent: 'center', height: '50%', margin: '10px'}}>
        <FormControl variant="standard">
          <InputLabel id="demo-simple-select-standard-label" style={{margin: '10px', fontWeight: 'bold', fontSize: '20px'}}>
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={category}
            onChange={handleCategory}
            label="Category"
            style={{backgroundColor: 'white', borderRadius: '5px', margin: '10px', paddingLeft: '10px'}}>
            <MenuItem value={1}>First</MenuItem>
            <MenuItem value={2}>Second</MenuItem>
            <MenuItem value={3}>Third</MenuItem>
            <MenuItem value={4}>Other</MenuItem>
          </Select>
          <Button variant="contained" onClick={handleSearchRoom} style={{margin: '10px', borderRadius: '5px'}}>
            join room
          </Button>
          {socket || ''}
        </FormControl>
      </div>
    </div>
  );

  const main = (
    <>
      <img style={{height: '105vh', zIndex: -1, filter: 'grayscale(20%)'}} src="/support-group.jpeg" alt="Support Group" />
      <div style={{position: 'absolute', left: '50%', top: '40vh', transform: 'translate(-50%, -50%)', color: 'white', fontSize: 80}}>test</div>
    </>
  );

  return <Layout drawer={drawer}>{main}</Layout>;
}

export default Home;
