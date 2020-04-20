import React, { Component } from 'react';
import Grade from './grade';

class GradeTable extends Component {
  render(props) {
    const grades = this.props.grades;

    if (grades.length === 0) {
      return (
        <table className="table table-striped table-bordered ml-3">
          <thead>
            <tr className="row">
              <th className="col">Student Name</th>
              <th className="col">Course</th>
              <th className="col">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No grades are recorded</td>
            </tr>
          </tbody>
        </table>
      );
    }
    return (
      <table className="table table-striped table-bordered ml-3">
        <thead>
          <tr className="row">
            <th className="col">Student Name</th>
            <th className="col">Course</th>
            <th className="col">Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade, id) =>
            <Grade key={id} grade={grade} />
          )}
        </tbody>
      </table>
    );
  }
}

export default GradeTable;
