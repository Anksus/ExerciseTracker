import React from "react";
import { Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import EditExercise from "./components/editexercise.component";
import CreateUser from "./components/createuser.component";
import CreateExcercise from "./components/createexercise.component";
import ExerciseList from "./components/exerciselist.component";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Router>
          <EditExercise path="/edit-exercise" />
          <CreateExcercise path="/create-exercise" />
          <CreateUser path="/create-user" />
          <ExerciseList path="/exercise-list" />
        </Router>
      </div>
    );
  }
}

export default App;
