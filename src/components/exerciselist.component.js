import React from "react";
import axios from "axios";
import { Link } from "@reach/router";

const Exercise = (props) => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}>
        <button type="button" className="btn btn-dark">
          Edit
        </button>
      </Link>{" "}
      |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        {" "}
        <button type="button" className="btn btn-dark">
          delete
        </button>
      </a>
    </td>
  </tr>
);

class ExerciseList extends React.Component {
  state = { exercises: [] };

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then((resp) => this.setState({ exercises: resp.data }))
      .catch((err) => console.log(err));

    console.log(this.state.exercises[0]);
  }

  deleteExercise = (id) => {
    axios.delete("http://localhost:5000/exercises/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  };

  exerciseList() {
    return this.state.exercises.map((currentexercise) => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={this.deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  }
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
