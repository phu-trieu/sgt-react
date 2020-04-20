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
    this.postGrade = this.postGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
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
    if (grades.length === 0) {
      return 'N/A';
    }

    for (let i = 0; i < grades.length; i++) {
      sum += grades[i].grade;
    }
    const avg = (sum / grades.length).toFixed(2);
    return (avg);
  }

  deleteGrade(deleteId) {
    fetch(`api/grades/${deleteId}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(newGrades => {
        const currentGrades = this.state.grades;
        let currentGradeIndex;
        const currentGradesCopy = currentGrades.slice();
        for (let i = 0; i < currentGradesCopy.length; i++) {
          if (currentGradesCopy[i].id === deleteId) {
            currentGradeIndex = i;
            break;
          }
        }
        currentGradesCopy.splice(currentGradeIndex, 1);
        this.setState({
          grades: currentGradesCopy
        });
      });
  }

  render() {
    return (
      <div>
        <Header avg={this.getAverageGrade()}/>
        <hr/>
        <div className="d-flex row">
          <div className="col-lg-8 mx-5">
            <GradeTable grades={ this.state.grades } delete={ this.deleteGrade } />
          </div>
          <div className="col-xl-3">
            <GradeForm onSubmit={ this.postGrade } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
