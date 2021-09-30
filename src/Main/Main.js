import React from "react";
import "./Main.css";

const Main = (props) => {
  const imgStyles = {
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
          <div className="infoContainer">
            <div style={imgStyles}></div>
            <div className="infoText">
              <h1 className="infoTextItem">{props.movieData.Title}</h1>
              <h3 className="infoTextItem">Actors: {props.movieData.Actors}</h3>
              <h3 className="infoTextItem">Year: {props.movieData.Year}</h3>
              <h3 className="infoTextItem">
                Released: {props.movieData.Released}
              </h3>
              <h3 className="infoTextItem">Genre: {props.movieData.Genre}</h3>

              <h1>Ratings</h1>

              {props.movieData.Ratings.map((movie) => (
                <div className="ratingsContainer">
                  <p>
                    {movie.Source} -{" "}
                    <span className="rating"> {movie.Value} </span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="btnContainer">
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
