import React from "react";
import Favourite from "./Favourite";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ListFavourites({ favourites, setFavourites }) {
  // When no favourites have been added "Nothing to show" is displayed. When there are items in favourites, it is mapped to create each item. Passing in relevant data to populate each card
  return (
    <Row>
      <h2>Favourites</h2>
      {favourites.length === 0 && <p className="text-muted">Nothing to show</p>}
      {favourites.map((result) => (
        <Col className="col-auto">
          <Favourite
            favourites={favourites}
            setFavourites={setFavourites}
            artistName={result.artistName}
            collectionName={result.collectionName}
            id={result.id}
            kind={result.kind}
            trackName={result.trackName}
          />
        </Col>
      ))}
    </Row>
  );
}

export default ListFavourites;
