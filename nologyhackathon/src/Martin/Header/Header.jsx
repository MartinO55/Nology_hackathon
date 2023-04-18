import React from "react";
import Searchbar from "../../Nathan/components/SearchBar/SearchBar";

const Header = ({ username }) => {
  return (
    <>
      <Searchbar />
      <h1>All About {username}</h1>
    </>
  );
};

export default Header;
