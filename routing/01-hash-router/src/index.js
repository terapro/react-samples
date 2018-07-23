import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Home, About, Catalogue, Contact, Whoops404} from './pages';

ReactDOM.render(
  <HashRouter>
    <div className='main'>
      <Switch> // Switch shows the data of the 1st matched component
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/catalogue' component={Catalogue} />
        <Route path='/contact' component={Contact} />
        <Route component={Whoops404} />
      </Switch>

    </div>
  </HashRouter>,
  document.getElementById('root'));
registerServiceWorker();
