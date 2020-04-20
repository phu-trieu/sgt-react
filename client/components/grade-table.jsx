import React, { Component } from 'react';
import Grade from './grade';

class GradeTable extends Component {
  render(props) {
    const grades = this.props.grades;

    if (grades.length === 0) {
      return (
        <div>
          <table className="table table-striped ml-3 col">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Course</th>
                <th>Grade</th>
                <th>Operations</th>
              </tr>
            </thead>
          </table>
          <h4 className="ml-3">No grades recorded.</h4>
        </div>
      );
    }
    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Course</th>
              <th>Grade</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade, id) =>
              <Grade key={id} grade={grade} delete={this.props.delete}/>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GradeTable;
