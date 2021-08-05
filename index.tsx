import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';

import { PagesHomePage } from './pages/homepage';
import { PagesAdminUsers } from './pages/admin/users';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={PagesHomePage} />
          <Route path="/pages/admin/users" component={PagesAdminUsers} />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
