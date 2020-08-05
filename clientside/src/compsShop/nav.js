import React, { useEffect, useState, useRef } from "react";
import _ from 'lodash';
import chunk from 'lodash/';


function Nav(props) {
  let searchInput = useRef();
  let sort_val = useRef();
  const searchBtn = () => {
    let search = searchInput.current.value;
    if (search == "") {
      alert("Please try again");
    } else {
      props.setsearch(search);
    }
    searchInput.current.value = "Search";
  };

  const sort = () => {
    alert(sort_val.current.value);
  };
  return (
    <nav className="container my-3">
      <div className="roworcolum">
        <div className="row">
          <div className="col-lg-8">
            <input
              ref={searchInput}
              className="form-control"
              placeholder="Search"
            />
          </div>
          <button onClick={searchBtn} className="btn btn-info">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-search"
              fillRule="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
              />
              <path
                fillRule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
              />
            </svg>
          </button>
        </div>
        <div className="col-lg-2">
          <select onChange={sort} ref={sort_val} className="form-control ">
            <option>Sort By name</option>
            <option  value="1">
              A-Z
            </option>
            <option  value="2">
              Z-A
            </option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Nav;


