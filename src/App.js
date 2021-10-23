import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Chatroom from './pages/chatroom'
import store from './redux';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Signin} />
        <Route path='/chat/:roomId' component={Chatroom} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
