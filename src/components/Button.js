import React, { Component } from 'react';

class Button extends Component {
  render() {
  	const classes = `${this.props.classes.join(' ')} button`;

    return (
      <button className={classes} 
      	disabled={this.props.disabled}
      	onClick={this.props.click}
      >
      	{this.props.content}
      </button>
    );
  }
}

export default Button;
