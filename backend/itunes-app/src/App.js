import { useEffect, useState } from "react";
import "./css/App.css";
import ListFavourites from "./Components/ListFavourites";
import ListResults from "./Components/ListResults";
import Search from "./Components/Search";
import { URL_API } from "./config/config";
import { FAVOURITES_URL } from "./config/config";

function App() {
  //Setting intial state
  const [newSearch, setNewSearch] = useState([]);
  const [searchString, newSearchString] = useState("");
  const [searchType, newSearchType] = useState("");
  const [favourites, setFavourites] = useState([]);

  // Making an API call on button click
  const SearchHandler = () => {
    fetch(`${URL_API}${searchString}&media=${searchType}&limit=10`, {
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
          // Replacing stardard image size with larger ones
          data.results.forEach((r) => {
            r.artworkUrl600 = r.artworkUrl100.replace("100x100", "600x600");
          });
          setNewSearch(data.results);
        },
        (err) => {
          console.log(err);
        }
      );
  };

  // Calls API to get items that have been favourited
  useEffect(() => {
    fetch(FAVOURITES_URL, {
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
          setFavourites(data);
        },
        (err) => {
          console.log(err);
        }
      );
  }, []);

  //Displaying various components and passing though data child components
  return (
    <div className="App">
      <h1>iTunes Search App</h1>
      <Search
        searchString={searchString}
        newSearchString={newSearchString}
        searchType={searchType}
        newSearchType={newSearchType}
        SearchHandler={SearchHandler}
      />
      <ListResults
        newSearch={newSearch}
        setNewSearch={setNewSearch}
        favourites={favourites}
        setFavourites={setFavourites}
      />
      <hr />
      <ListFavourites favourites={favourites} setFavourites={setFavourites} />
    </div>
  );
}

export default App;
