// frontend/src/api.js

const API_BASE =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_BASE
    : "http://localhost:5000";

export { API_BASE };