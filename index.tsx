import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Start editing to see some magic happen :) dave</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
