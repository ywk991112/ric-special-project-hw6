import React, { Component, PropTypes } from 'react'; //??

class MessageItem extends React.Component {
  render() {
    var messageNode = this.props.conversationList.map(function(conversation) {
      return (
        <div className={"message-item " + (conversation.from_me? 'message-from-me' : 'message-from-other')}>
          <span>{conversation.message}</span>
        </div>
      );
    });
    return (
      <div>{messageNode}</div>
    );
  }
}

export default MessageItem; //Concerning the default export, there is only a single default export per module. A default export can be a function, a class, an object or anything else. This value is to be considered as the "main" exported value since it will be the simplest to import.
