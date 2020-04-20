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
    if (
      this.state.name.length === 0 ||
      this.state.course.length === 0 ||
      this.state.grade.length === 0
    ) return;
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: Number.parseInt(this.state.grade)
    };
    this.props.onSubmit(newGrade);
    this.handleReset();
  }

  handleReset() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <form className=" d-flex flex-wrap " onSubmit={this.handleSubmit}>
          <h2 className="d-flex col-12 justify-content-center">Add Grade</h2>
          <div className="mb-3 col-12 p-0 input-group justify-content-center">
            <div className="input-group-prepend">
              <span className="fas fa-user input-group-text"></span>
            </div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={this.state.name}
              className="col-9"
              onChange={this.handleNameChange} />
          </div>
          <div className="mb-3 col-12 d-flex p-0 input-group justify-content-center">
            <div className="input-group-prepend">
              <span className="fas fa-list-alt input-group-text"></span>
            </div>
            <input
              type="text"
              name="course"
              id="course"
              placeholder="Course"
              value={this.state.course}
              className="col-9"
              onChange={this.handleCourseChange} />
          </div>
          <div className="mb-3 col-12 d-flex p-0 input-group justify-content-center">
            <div className="input-group-prepend">
              <span className="fas fa-graduation-cap input-group-text"></span>
            </div>
            <input
              type="text"
              name="grade"
              id="grade"
              placeholder="Grade"
              value={this.state.grade}
              className="col-9 form-control"
              onChange={this.handleGradeChange} />
          </div>
          <div className="col-12 d-flex justify-content-center p-0">
            <button type="submit" className="btn btn-success">Add</button>
            <button onClick={this.handleReset} className="ml-3 btn btn-outline-secondary">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default GradeForm;
