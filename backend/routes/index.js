const express = require("express");
const router = express.Router();
const fs = require("fs");
const request = require("request");
const config = require("../config/config");

// Getting items array from items.json
const favouritesArr = () => {
  return JSON.parse(fs.readFileSync("./favourites.json"));
};

// Saving to the items.json file
const saveItem = (data) => {
  const stringifyData = JSON.stringify(data);
  return JSON.stringify(fs.writeFileSync("./favourites.json", stringifyData));
};

const deleteItem = (id, currentItems) => {
  let isFound = false;

  // Loop through the array of items, remove the item, save new array, return success msg
  for (let i = 0; i < currentItems.length; i++) {
    if (currentItems[i].id === id) {
      currentItems.splice(i, 1);
      isFound = true;
      saveItem(currentItems);
    }
  }

  return isFound;
};

//handleCreate method
const handleCreate = (req, res) => {
  const currentItems = favouritesArr();

  // Pushing the new item to the items array, calling saveItem function, returning status and a msg
  currentItems.push(req.body);
  saveItem(currentItems);
  res.status(201).send({ msg: "New item added.", currentItems });
};

//handleGet method
const handleGet = (req, res) => {
  res.json(favouritesArr());
};

//handleDelete method
const handleDelete = (req, res) => {
  const id = Number(req.params.id);
  const currentItems = favouritesArr();

  const isFound = deleteItem(id, currentItems);

  // If no ID is found, return 404 and msg
  if (isFound === false) {
    return res
      .status(404)
      .send({ msg: "Item not found. Please check ID", currentItems });
  } else {
    return res.send({ msg: "Item deleted successfully", currentItems });
  }
};

//handleSearch method
const handleSearch = (req, res) => {
  const term = req.query.term;
  const media = req.query.media;
  const limit = req.query.limit;

  request(
    {
      url: `${config.ITUNES_URL}?term=${term}&media=${media}&limit=${limit}`,
    },
    (error, response, body) => {
      console.log(error, response, body);
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: error });
      }

      res.json(JSON.parse(body));
    }
  );
};

// Create - POST
router.post("/create", handleCreate);

// Read - GET
// Reading items from the items.json file by calling favouritesArr function
router.get("/", handleGet);

// Search - GET
// Search iTunes API
router.get("/search", handleSearch);

// Delete
router.delete("/delete/:id", handleDelete);

module.exports = { router, handleGet, handleDelete, handleCreate };
