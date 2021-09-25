import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import store from './redux';
import PrivateRoute from './routes/private-route';
import Signup from './pages/signup';
import Signin from './pages/signin';
import ChatRoom from './pages/chatroom';
import Home from './pages/home';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <PrivateRoute exact path="/chat" component={ChatRoom} />
          <PrivateRoute exact path="/home" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
