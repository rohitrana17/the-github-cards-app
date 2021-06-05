import React from "react";
import Form from "./Form.js";
import "./styles.css";
import CardList from "./CardList.js";
//render all the components nn the top level App component.
class App extends React.Component {
  state = {
    profiles: []
  };
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}
export default App;
