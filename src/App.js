import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Chatroom from './pages/chatroom'
import store from './redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './routes/private-route';
import Home from './pages/home';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ToastContainer position="top-left" />
      <Switch>
        <Route path='/' exact component={Signin} />
        <Route path='/signup' exact component={Signup} />
        <PrivateRoute path='/chat/:roomId' component={Chatroom} />
        <PrivateRoute exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
