import axios from "axios";
import React from "react";
import "./styles.css";
class Form extends React.Component {
  state = { userName: "" };
  //use Axios library as it is more simple to use rather than React default fetch method.
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(resp.data);
    this.setState({ userName: "" });
  };
  render() {
    //for taking input  from users, always use  controlled component rather than ref property.
    //As react is aware of state change even for a single character in controlled components.
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="wrap">
          <div className="search">
            <input
              className="searchTerm"
              type="text"
              value={this.state.userName}
              onChange={(event) =>
                this.setState({ userName: event.target.value })
              }
              placeholder="Enter GitHub Username"
              required
            />
            <button className="searchButton">Add card</button>
          </div>
        </div>
      </form>
    );
  }
}
export default Form;
