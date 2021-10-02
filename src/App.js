//import logo from "./logo.svg";
import "./App.css";
import { useState,useEffect } from "react";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";

function App() {
  const [searchText, setSearchText] = useState("");
  const [show, setShow] = useState(false);
  const [movieData, setMovieData] = useState({});

  const searchMovie = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}&t=${searchText}`
    );
    const data = await response.json();
    
    setMovieData(data);
   
    setShow(true);
  };

  return (
    <div className="App">
      <Nav searchMovie={searchMovie} setSearchText={setSearchText} />
      <Main setShow={setShow} show={show} movieData={movieData} />
    </div>
  );
}

export default App;
