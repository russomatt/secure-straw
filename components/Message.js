import React, { Component } from 'react';

class Message extends Component {
  parseContentForUsers(content) {
    // list of users to check against
    const users = ['Cory Robinson', 
      'John Doe',
      'Jane Doe'];
    let arrUserIdx = [];

    for (let i = 0; i < users.length; i++) {
      const user = users[i];

      if (content.indexOf(user) !== -1) {
        const startIdx = content.indexOf(user);
        const endIdx = startIdx + user.length;

        content = content.slice(0, startIdx) + '`~' + user + '`' +
          content.slice(endIdx, content.length);

        console.log(content);
      }
    }

    if(arrUserIdx === 0) {
      return (<span>{content}</span>);
    } else {
      const splitContent = content.split('`');
      const newContent = splitContent.map(function(contentSection, i) {

        if (contentSection[0] === '~') {
          const contentUser = contentSection.substr(1);
          return (
            <span className="content-user" key={i}>
              {contentUser}
            </span>
          );
        } else {
          return (
            <span key={i}>
              {contentSection}
            </span>
          )
        }
      });

      return newContent;
    }

  }
  render() {
    const names = this.props.user.split(' ');
    const firstInitial = names[0][0];
    const secondInitial = names[1][0];
    const initials = firstInitial + secondInitial;
    const content = this.parseContentForUsers(this.props.message);
    return (
      <div className="message">
          <div className="message-user">
            {initials}
          </div>
          <div className="message-section">
            <div className="message-name">
              {this.props.user}
            </div>
            <div className="message-date">
              <span className="pipe">
               |&nbsp;
              </span>
              <span className="message-date-content">
                {this.props.date}
                <span>
                 &nbsp;at&nbsp;
                </span>
                {this.props.time}
              </span>
            </div>
            <div className="message-content">
              {content}
            </div>
          </div>
      </div>
    );
  }
}

export default Message;
