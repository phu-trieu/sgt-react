import React, { Component } from 'react';
import Grade from './grade';

class GradeTable extends Component {
  render(props) {
    const grades = this.props.grades;

    if (grades.length === 0) {
      return (
        <div className="table-responsive">
          <table className="table table-striped ml-3 col">
            <thead>
              <tr>
                <th scope="col">Student Name</th>
                <th scope="col">Course</th>
                <th scope="col">Grade</th>
              </tr>
            </thead>
          </table>
          <h4 className="ml-3">No grades recorded.</h4>
        </div>
      );
    }
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Grade</th>
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
