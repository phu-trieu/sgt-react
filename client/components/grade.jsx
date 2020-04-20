import React, { Component } from 'react';

class Grade extends Component {
  render(props) {
    const grade = this.props.grade;
    return (
      <tr className="row">
        <td className="col">{grade.name}</td>
        <td className="col">{grade.course}</td>
        <td className="col">{grade.grade}</td>
      </tr>
    );
  }
}

export default Grade;
