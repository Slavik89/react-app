
import './App.scss';
import {Route, BrowserRouter, Link } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/Home';
import Skill from './components/Skill';
import Qualities from './components/Qualities';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="titled">
          <ul type="none">
            <li><Link to='/' className="titles">Home</Link></li>
            <li><Link to='/skill' className="titles">Skill</Link></li>
            <li><Link to='/qualities' className="titles">Qualities</Link></li>
          </ul>
        </div>

        <div>
          <Route path='/' component={Home} />
          <Route path='/skill' component={Skill} />
          <Route path='/qualities' component={Qualities} />          
        </div>
      </BrowserRouter>          
    )
  }
}

export default App;
