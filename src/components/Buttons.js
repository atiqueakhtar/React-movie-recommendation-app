import movies from "./Movies";

export default function Buttons(props) {
  let clickHandler = (e) => {
    let genre = e.target.innerText;
    props.setMovieList(movies[genre]);
  };
  let buttonList = props.genreList.map((currGenre) => {
    return (
      <button onClick={clickHandler} className="genreButtons">
        {currGenre}
      </button>
    );
  });
  return <div>{buttonList}</div>;
}
