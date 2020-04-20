import React, { Component } from 'react';

class Header extends Component {
  render(props) {
    return (
      <div className="container-fluid">
        <div className="m-3 d-flex justify-content-between row align-items-center">
          <h1 className="col-lg-4 d-flex justify-content-center">Student Grade Table</h1>
          <h2 className="col-lg-4 d-flex justify-content-center">Average Grade <span className="badge badge-secondary ml-3">{this.props.avg}</span></h2>
        </div>
      </div>
    );
  }
}

export default Header;
