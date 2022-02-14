import React from "react";
import Result from "./Result";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/ListResults.css";

function ListResults({ newSearch, setNewSearch, favourites, setFavourites }) {
  // When there are no search results "Nothing to show" is displayed. When a search returns results, it is mapped to create each item. Passing in relevant data to populate each card
  return (
    <Row>
      <h2>Results</h2>
      {newSearch.length === 0 && <p className="text-muted">Nothing to show</p>}
      {newSearch.map((result) => (
        <Col className="col-auto">
          <Result
            newSearch={newSearch}
            setNewSearch={setNewSearch}
            favourites={favourites}
            setFavourites={setFavourites}
            artistName={result.artistName}
            collectionName={result.collectionName}
            id={result.trackId ? result.trackId : result.collectionId}
            kind={result.kind ? result.kind : result.wrapperType}
            trackName={result.trackName}
          />
        </Col>
      ))}
    </Row>
  );
}

export default ListResults;
