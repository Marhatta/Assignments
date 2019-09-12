import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';

import Todo from '../src/components/Todo/Todo';
import Settings from '../src/components/Settings/Settings';
import Landing from '../src/components/Landing/Landing';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <ul>
          <li><Link to='/todo'>Todo</Link></li>
          <li><Link to='/settings'>Settings</Link></li>
        </ul>
      </div>
      
      <Route path='/todo' component={Todo} />
      <Route path='/settings' component={Settings} />
      <Route path='/' exact component={Landing} />
      
    </BrowserRouter>
  );
}

export default App;
