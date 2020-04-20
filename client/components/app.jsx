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

  render() {
    return (
      <div>
        <Header />
        <GradeTable grades={ this.state.grades } />
      </div>
    );
  }
}

export default App;
