// Keeping API URLs out of the main app.js by storing them in config
export const FAVOURITES_URL =
  process.env.NODE_ENV && process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api/"
    : "https://l2capstoneproject2.herokuapp.com/api/";
