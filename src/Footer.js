import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer" onClick={this.props.onFooterClick}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Footer;
