import React, { Component } from 'react';
import Message from './Message.js';

class MessageList extends Component {
  constructor(props) {
    super(props);
  }

  getMessageNodes(messages) {
    const nodes = messages.map(function(message, i) {
      return (
          <Message 
            user={message.user}
            message={message.message}
            date={message.date}
            time={message.time}
          />
        );
    });

    return nodes;
  }

  render() {
    const messages = this.getMessageNodes(this.props.messages);
    return (
      <div className="messages">
        {messages}
      </div>
    );
  }
}

export default MessageList;
