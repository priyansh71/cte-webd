import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {

  return (
    <header>
      <Link to="/">Back Home</Link>
      <center>
        <h5>{props.title}</h5>
      </center>
    </header>
  );
};

export default Header;
