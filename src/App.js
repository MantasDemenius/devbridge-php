import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import loginForm from './components/loginForm';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={loginForm}>

          </Route>

        </div>
      </Router>
    );
  }
}

export default App;
