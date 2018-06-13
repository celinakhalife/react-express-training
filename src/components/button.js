import React, { Component } from 'react';
import buttonImg from '../assets/images/buttonImg.png';
import './button.css';

class Button extends Component {
  render() {
    return <img class="Button" src={buttonImg} alt="buttonImg" />;
  }
}

export default Button;
