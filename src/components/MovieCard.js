export default function Card(props) {
  let movies = props.movieList.map((currMovie) => {
    return (
      <div className="card-container">
        <h2 className="card-header">{currMovie.name}</h2>
        <div className="clard-desc">{currMovie.description}</div>
        <h4>
          Duration: {currMovie.duration} IMDB: {currMovie.imdb}
        </h4>
      </div>
    );
  });
  return <div>{movies}</div>;
}
