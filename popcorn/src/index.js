import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";
import Text from "./Text";
import { useState } from "react";
// const text =
//   "Must learn the system design and microservices in the backend. And preprare your portfolio very soon in this month by doing 3 to 4 projects. Best of luck! ";
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <>
//       <StarRating
//         color="blue"
//         maxRating={10}
//         movieRating={setMovieRating}
//         defaultRating={5}
//       />
//       <p>This movie was rated {movieRating} stars</p>
//     </>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} defaultRating={5} />
    <Test />
    <Text>{text}</Text> */}
  </React.StrictMode>
);
