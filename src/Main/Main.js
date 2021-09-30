import React from "react";
import "./Main.css";

const Main = (props) => {
  const styles = {
    backgroundImage: `url(${props.movieData.Poster})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    height: "300px",
    width: "200px",
  };

  return (
    <div className="mainContainer">
      {props.show && (
        <div className="modalContainer">
          <div>
            <h1>{props.movieData.Title}</h1>
            <h3>Actors: {props.movieData.Actors}</h3>
            <div style={styles}></div>
          </div>

          <div>
            <button className="searchBtn" onClick={() => props.setShow(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
