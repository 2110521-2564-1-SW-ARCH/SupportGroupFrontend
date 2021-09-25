import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux';

import Signup from './pages/signup';
import Signin from './pages/signin';
import ChatRoom from './pages/chatroom';
import Home from './pages/home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/chat" component={ChatRoom} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
