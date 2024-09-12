import Loader from "./Loader";
import Error from "./Error";

export default function LeftBox({
  setIsOpen1,
  isOpen1,
  movies,
  isLoading,
  isError,
  onSelectMovie,
}) {
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && (
        <ul className="list list-movies">
          {isLoading && <Loader />}
          {!isLoading &&
            !isError &&
            movies?.map((movie) => (
              <li
                key={movie.imdbID}
                onClick={() => onSelectMovie(movie.imdbID)}
              >
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
                <div>
                  <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                  </p>
                </div>
              </li>
            ))}
          {!isLoading && isError && <Error message={isError} />}
        </ul>
      )}
    </div>
  );
}
