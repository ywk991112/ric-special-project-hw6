import React, { Component, PropTypes } from 'react';
import database from './Database.js'

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    // static defaultProps = {
      // user = getUser(name);
    // }
    this.name = this.props.params.username;
    this.state = (name) => {
      for(var user of database.datas) {
        if(user.name = name)
          return user;
      }
    }
  }
  
  // getUser = (name) => {
      // for(var user of database.datas) {
        // if(user.name = name)
          // return user;
      // }
  // }

  render() {
    return (
        <div>
          <h2>{this.state.user.name}</h2>
        </div>
    )
  }
}
