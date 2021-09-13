import './App.css';
import {BrowserRouter as Router, /* Route, */ Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>{/* <Route exact path="/home" component={HomeScreen} /> */}</Switch>
      </Router>
    </Provider>
  );
}

export default App;
