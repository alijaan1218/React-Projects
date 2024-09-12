export default function NumFilms({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies ? movies.length : "0"}</strong> results
    </p>
  );
}
