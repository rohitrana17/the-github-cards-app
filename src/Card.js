import React from "react";
import "./styles.css";
class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      //here, we are working with data that is fetched from GitHub API.
      <div className="github-profile">
        <img src={profile.avatar_url} alt="github-bar" />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company"> {profile.company} </div>
        </div>
      </div>
    );
  }
}
export default Card;
