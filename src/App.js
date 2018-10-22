import React, { Component } from 'react';
import MessageList from './components/MessageList.js';
import Button from './components/Button.js';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {user: 'Andre Wheeler',
      message: '',
      messages: [
        {user: 'Andre Wheeler',
        message: 'We have to make sure that we have all the punch list items account for. Cory Robinson I want you to take the lead on this.',
        date: 'Jan 20',
        time: '6:34 PM'
        }
      ]
      };

    this.sendMessage = this.sendMessage.bind(this);
    this.onChange = this.onChange.bind(this);
    this.inputRef = React.createRef();
    this.messagesRef = React.createRef();
  }
  onChange(event) {
    const value = event.target.value;
    this.setState({message: value});
  }
  sendMessage(event) {
    const message = this.state.message;
    const d = new Date();
    const isPM = d.getHours() > 12;
    const date = d.getTime();
    const hour = isPM ? d.getHours() - 12 : d.getHours();
    const minutes = d.getHours();
    const amPm = isPM ? ' PM' : 'AM';
    const time = hour + ':' + minutes + amPm;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
      'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[d.getMonth()];
    const day = d.getDate();
    const formattedDate = month + ' ' + day;
    const input = this.inputRef.current;
    const messages = this.messagesRef.current;

    if (message !== '') {
      let arrMsg = this.state.messages;
      arrMsg.push({user: this.state.user,
        message: message,
        date: formattedDate,
        time: time});
      input.value = '';
      this.setState({message: '', messages: arrMsg});
    }
  }
  render() {
    return (
      <div className="app-container">
        <MessageList
          messages={this.state.messages}
        />
        <div className="input-section">

          <div className="input-container">
            <label>
            </label>
            <input className="message-input"
              onChange={this.onChange}
              placeholder="Enter reply here."
              ref={this.inputRef}>
            </input>
          </div>
          <Button
            classes={['reply-button']}
            content={'Reply'}
            click={this.sendMessage}
          />
        </div>
      </div>
    );
  }
}

export default App;
