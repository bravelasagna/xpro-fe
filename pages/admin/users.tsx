import React, { Component } from 'react';

import { appParams } from '../../app-params';

export class PagesAdminUsers extends Component {
  constructor(props) {
    super(props);
    this.state = { usersList: [], userEditId: 0 };
    this.displayMode = 'list';
  }

  componentDidMount() {
    this.populateUsersList();
  }

  populateUsersList() {
    fetch(appParams.apiURL + 'User')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ usersList: responseJson });
      });
  }

  userClicked(userId) {
    this.displayMode = 'edit';
    this.setState({ userEditId: userId });
  }

  render() {
    if (this.displayMode == 'list') {
      return this.state.usersList.map(user => (
        <div onClick={() => this.userClicked(user.id)}>
          User:{user.first_name + ' ' + user.last_name}
        </div>
      ));
    }
    if (this.displayMode == 'edit') {
      return <span>this is edit for userId: {this.state.userEditId}</span>;
    }
  }
}
