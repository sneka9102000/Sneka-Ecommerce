import React, { useState, Fragment } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import MetaData from "../layout/MetaData";
import "./Search.css";

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");
  const navigate=useNavigate();
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
    //   history.push(`/products/${keyword}`);
    navigate(`/products/${keyword}`)
    } else {
      navigate('/products');
    }
  };

  return (
    <Fragment>
      <MetaData title="Search your Brands" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search your brands"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;