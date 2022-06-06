import React, { useState } from "react";
import { useParams } from "react-router";
import DATA from "../Data";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const proid = useParams();
  const SearchBar = DATA.filter((x) => x.id == proid.id);
  const proDetail = SearchBar[0];
  console.log(proDetail);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
          
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      {filteredData.length != 0 && (
        <ul className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <Link to={`/products/${value.id}`}>
                <li>{value.title} </li>
              </Link>
            );
          })}
        </ul>
      )}
      </div>
    </div>
  );
}

export default SearchBar;