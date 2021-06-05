import "./styles.css";
import Card from "./Card.js";
import React from "react";
class CardList extends React.Component {
  render() {
    return (
      //uses map function to iterate over  array of data.
      <div>
        {this.props.profiles.map((profile) => (
          //Always use a key property  otherwise, it'll be difficult to re-ordering elements.
          <Card key={profile.id} {...profile} />
        ))}
      </div>
    );
  }
}

export default CardList;
