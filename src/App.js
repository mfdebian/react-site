/* React imports */
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import React, {Component} from 'react';

/* App imports */
import './assets/css/App.css';

/* Other components imports */
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Posts from './components/posts/Posts.js';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">

          <header className="App-header">
            <p onClick={() => window.location='/'}>
              Hi
            </p>
          </header>

          <button><Link to="/posts">Posts</Link></button>
          <button><Link to="/about">About</Link></button>

          <p>
            <br />
            <hr />
          </p>

          <Route exact path="/" component={ Home }/>
          <Route path="/about" component={ About }/>
          <Route path="/posts" component={ Posts }/>
          
        </div>
      </Router>
    );
  }
}

export default App;
