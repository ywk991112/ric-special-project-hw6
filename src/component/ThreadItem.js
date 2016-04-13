import React, { Component, PropTypes } from 'react';

class ThreadItem extends React.Component {
  render() {
    const {id, name, message_r, time_r, onClick} = this.props;
    // html -> jsx
    return (
      <li className="thread-item" onClick={onClick}>
          <div className="clearfix">
            <div className="thread-item_left">
              <img className="img-circle" src={'http://lorempixel.com/50/50/people/'+id} width="50" height="50" alt="" class="img" />
            </div>
            <div className="thread-item_right">
              <div className="thread-from">
                {name}
              </div>
              <div>
                <span className="thread-content">{message_r}</span>
              </div>
              <span className="thread-time">{time_r}</span>
            </div>
          </div>
      </li>
    );
  }
}

export default ThreadItem;
