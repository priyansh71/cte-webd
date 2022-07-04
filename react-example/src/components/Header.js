import React from "react";

const Header = (props) => {

  return (
    <header>
      <center>
        <h5>{props.title}</h5>
      </center>
    </header>
  );
};

export default Header;
