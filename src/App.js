import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux';

// import Signup from './pages/Signup';
import Signin from './pages/signin';
import ChatRoom from './pages/chatroom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={ChatRoom} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/chat" component={ChatRoom} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
