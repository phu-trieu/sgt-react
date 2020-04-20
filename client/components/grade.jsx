import React, { Component } from 'react';

class Grade extends Component {
  render(props) {
    const grade = this.props.grade;
    return (
      <tr>
        <td scope="col">{grade.name}</td>
        <td scope="col">{grade.course}</td>
        <td scope="col">{grade.grade}</td>
      </tr>
    );
  }
}

export default Grade;
