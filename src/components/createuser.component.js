import React from "react";
import axios from "axios";

class CreateUsr extends React.Component {
  state = {
    username: "",
    showLog: false,
  };
  onsubmit = (e) => {
    e.preventDefault();
    const user = {
      username: this.state.username,
    };
    console.log(user);
    this.setState({ username: "", showLog: true });
    setTimeout(() => {
      this.setState({ showLog: false });
    }, 2000);

    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));
  };
  render() {
    return (
      <div>
        <h3>Create new user</h3>
        <form onSubmit={this.onsubmit}>
          <div className="form-group">
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
          {this.state.showLog ? (
            <div>
              <h3> {this.state.username} New user added</h3>
            </div>
          ) : null}
        </form>
      </div>
    );
  }
}

export default CreateUsr;
