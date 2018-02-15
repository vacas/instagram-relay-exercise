import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './components/App';
import CreatePage from './components/CreatePage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/create' component={CreatePage} />
      <Route path='*' render={() => <h1>Not Found</h1>} />
    </Switch>
  </Router>
  , document.getElementById('root')
);

registerServiceWorker();
