import React, { Component } from 'react';

class GradeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleCourseChange(event) {
    this.setState({
      course: event.target.value
    });
  }

  handleGradeChange(event) {
    this.setState({
      grade: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: Number.parseInt(this.state.grade)
    };
    this.props.onSubmit(newGrade);
    this.handleReset();
  }

  handleReset(event) {
    event.preventDefault();
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <form className=" d-flex flex-wrap justify-content-end" onSubmit={this.handleSubmit}>
        <div className="mb-3 col-12 d-flex justify-content-end">
          <span className="fas fa-user mr-2"></span>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={this.state.name}
            className="col-9"
            onChange={this.handleNameChange} />
        </div>
        <div className="mb-3 col-12 d-flex justify-content-end">
          <span className="fas fa-list-alt mr-2"></span>
          <input
            type="text"
            name="course"
            id="course"
            placeholder="Course"
            value={this.state.course}
            className="col-9"
            onChange={this.handleCourseChange} />
        </div>
        <div className="mb-3 col-12 d-flex justify-content-end">
          <span className="fas fa-graduation-cap mr-2"></span>
          <input
            type="text"
            name="grade"
            id="grade"
            placeholder="Grade"
            value={this.state.grade}
            className="col-9"
            onChange={this.handleGradeChange} />
        </div>
        <div className="col-12 d-flex justify-content-end">
          <button type="submit">Add</button>
          <button onClick={this.handleReset} className="ml-3">Cancel</button>
        </div>
      </form>
    );
  }
}

export default GradeForm;
