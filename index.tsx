import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { render } from 'react-dom';

import { PagesHomePage } from './pages/homepage';
import { PagesAdminUsers } from './pages/admin/users';
import './styles.css';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter basename={baseUrl}>
          <Route exact path="/" component={PagesHomePage} />
          <Route path="/pages/admin/users" component={PagesAdminUsers} />
        </BrowserRouter>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
