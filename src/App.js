import "./styles.css";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import genres from "./components/Movies";
import Cards from "./components/MovieCard";
import { useState } from "react";

export default function App() {
  const [movieList, setMovieList] = useState([]);
  let genreList = Object.keys(genres);
  return (
    <div className="App">
      <Header />
      <Buttons
        genreList={genreList}
        movieList={movieList}
        setMovieList={setMovieList}
      />
      <Cards movieList={movieList} setMovieList={setMovieList} />
    </div>
  );
}
