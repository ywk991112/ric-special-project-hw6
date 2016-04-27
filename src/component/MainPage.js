import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class MainPage extends React.Component {
  render() {
      return (
        <div>
          <h1>Click the button to enter the messenger!!</h1>
          <button><Link to='/chat'>messenger</Link></button>
        </div>
      );
  }
}

export default MainPage;
