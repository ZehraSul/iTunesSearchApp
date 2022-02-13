import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Search({ newSearchString, newSearchType, SearchHandler }) {
  //Sets newSearchString value to entered text
  const textChangeHandler = (e) => {
    e.preventDefault();
    newSearchString(e.target.value);
  };

  const typeChangeHandler = (e) => {
    //Sets newSearchType value to selected option
    e.preventDefault();
    newSearchType(e.target.options[e.target.options.selectedIndex].value);
  };

  // Create input for typing in search phrase, dropdown for selecting media type options and a submit button
  return (
    <div>
      <InputGroup
        className="mb-3"
        style={{ width: "50%", margin: "auto", paddingTop: "2%" }}
      >
        <FormControl
          onChange={textChangeHandler}
          placeholder="Search"
          aria-label="Text input with dropdown button"
        />
        <Form.Select
          variant="outline-secondary"
          id="input-group-dropdown-2"
          align="end"
          onChange={typeChangeHandler}
        >
          <option value="" disabled selected hidden>
            Media Type
          </option>
          <option value="movie">Movies</option>
          <option value="podcast">Podcasts</option>
          <option value="music">Music</option>
          <option value="musicVideo">Music Video</option>
          <option value="shortFilm">Short Film</option>
          <option value="tvShow">TV Show</option>
          <option value="ebook">eBook</option>
          <option value="all">All</option>
        </Form.Select>
        <Button variant="primary" onClick={SearchHandler}>
          Submit
        </Button>
      </InputGroup>
    </div>
  );
}

export default Search;
