import React, { Component } from 'react';

class Header extends Component {
  render(props) {
    return (
      <div className="m-3 d-flex justify-content-between">
        <h1>Student Grade Table</h1>
        <h1>Average Grade <span className="badge badge-secondary">{this.props.avg}</span></h1>
      </div>
    );
  }
}

export default Header;
