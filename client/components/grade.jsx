import React, { Component } from 'react';

class Grade extends Component {
  render(props) {
    const deleteId = this.props.grade.id;
    const grade = this.props.grade;
    return (
      <tr>
        <td>{grade.name}</td>
        <td>{grade.course}</td>
        <td>{grade.grade}</td>
        <td><button className="btn btn-danger ml-3" onClick={() => this.props.delete(deleteId)}>DELETE</button></td>
      </tr>
    );
  }
}

export default Grade;
