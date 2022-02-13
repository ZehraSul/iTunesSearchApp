import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FAVOURITES_URL } from "../config/config";
import "../css/Result.css";

function Result({
  newSearch,
  setNewSearch,
  favourites,
  setFavourites,
  artistName,
  artWork,
  collectionName,
  id,
  kind,
  trackName,
}) {
  const favouriteHandler = (e) => {
    // when the favourite button is clicked a POST call to the api is made to create the favourited item in the favourites array.
    e.preventDefault();
    fetch(`${FAVOURITES_URL}create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        artistName: artistName,
        collectionName: collectionName,
        artWork: artWork,
        kind: kind,
        trackName: trackName,
      }),
    }).then(
      (data) => {
        // Get favourites list and add item to favourites list
        favourites.push({
          id: id,
          artistName: artistName,
          collectionName: collectionName,
          artWork: artWork,
          kind: kind,
          trackName: trackName,
        });
        // Set favourites list state
        setFavourites(favourites);

        // Get results list and remove item from results list
        newSearch = newSearch.filter(
          (searchResult) =>
            (searchResult.trackId
              ? searchResult.trackId
              : searchResult.collectionId) !== id
        );
        // Set results list state
        setNewSearch(newSearch);

        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  // Display card with styling and populated fields
  return (
    <div>
      <Card
        key={id}
        className=" result shadow mb-5  rounded"
        style={{ width: "18rem", minHeight: "7rem" }}
      >
        <Card.Img style={{ height: "18rem" }} variant="top" src={artWork} />
        <Card.Body>
          <Card.Title>{collectionName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            by {artistName}
          </Card.Subtitle>
          <Card.Text>{trackName}</Card.Text>
          <Button
            className="btn-circle"
            variant="secondary"
            onClick={favouriteHandler}
          >
            <i class="fa fa-heart"></i>
          </Button>
        </Card.Body>
        <Card.Footer>
          <Card.Text className="badge badge-pill bg-primary">{kind}</Card.Text>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Result;
