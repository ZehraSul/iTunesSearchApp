import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../css/Favourites.css";
import { FAVOURITES_URL } from "../config/config";

function Favourite({
  setFavourites,
  artistName,
  artWork,
  collectionName,
  id,
  kind,
  trackName,
}) {
  // When the button is clicked on a item that is a favourite, a delete call is made to the API which removes the items from the favourites list
  const DeleteFavouriteHandler = () => {
    fetch(`${FAVOURITES_URL}delete/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then(
        (data) => {
          setFavourites(data.currentItems);
        },
        (err) => {
          console.log(err);
        }
      );
  };
  // Displaying the data from the api on a card with spme styling and a button.
  return (
    <div>
      <Card
        key={id}
        className=" result shadow mb-5 rounded"
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
            variant="danger"
            onClick={DeleteFavouriteHandler}
          >
            <i className="fa fa-heart"></i>
          </Button>
        </Card.Body>
        <Card.Footer>
          <Card.Text className="badge badge-pill bg-primary">{kind}</Card.Text>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Favourite;
