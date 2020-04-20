import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

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
    this.getAverageGrade();
    return (
      <div>
        <Header avg={this.getAverageGrade()}/>
        <GradeTable grades={ this.state.grades } />
      </div>
    );
  }
}

export default App;
