import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [{
        id: 5,
        name: 'Kyle Simpson',
        course: 'JavaScript',
        grade: 100
      },
      {
        id: 12,
        name: 'Brendan Eich',
        course: 'JavaScript',
        grade: 100
      },
      {
        id: 32,
        name: 'Douglas Crockford',
        course: 'JavaScript',
        grade: 100
      }]
    };
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
