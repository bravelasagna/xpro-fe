import React, { Component } from 'react';

export class DefaultLayout extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <main className="col-md-9 ms-sm-auto col-lg-10 intellicreo-main">
            {this.props.children}
          </main>
        </div>
      </div>
    );
  }
}
