import React from "react";
import axios from "axios";
import { Link } from "@reach/router";

class ExerciseList extends React.Component {
  state = { exercises: [] };

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then((resp) => this.setState({ exercises: resp.data }))
      .catch((err) => console.log(err));

    console.log(this.state.exercises[0]);
  }

  exerciseList = () => {
    return this.state.exercises.map((currExer) => {
      return (
        // <ExerciseComp
        //   exercise={currExer}
        //   deleteExercise={this.deleteExercise}
        //   key={currExer._id}
        // />
        <tr>
          <td>{currExer.username}</td>
          <td>{currExer.description}</td>
          <td>{currExer.duration}</td>
          <td>{currExer.date}</td>
          <td>
            <Link to={"/edit/" + currExer._id}>Edit</Link> |{" "}
            <Link to="/hell">Delete</Link>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h3>All exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}

export default ExerciseList;
