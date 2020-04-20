import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './gradeform';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    fetch('/api/grades', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(dbGrades => this.setState({
        grades: dbGrades
      }));
  }

  postGrade(newGrade) {
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newGrade.name,
        grade: newGrade.grade,
        course: newGrade.course
      })
    })
      .then(res => res.json())
      .then(insertedGrade => this.setState({
        grades: this.state.grades.concat(insertedGrade)
      }));
  }

  getAverageGrade() {
    const grades = this.state.grades;
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
      sum += grades[i].grade;
    }
    const avg = (sum / grades.length).toFixed(2);
    return (avg);
  }

  render() {
    return (
      <div>
        <Header avg={this.getAverageGrade()}/>
        <div className="d-flex">
          <div className="col-8">
            <GradeTable grades={ this.state.grades } />
          </div>
          <div className="col-4">
            <GradeForm onSubmit={this.postGrade} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
