import { useEffect, useState } from "react";
import Nav from "./Nav";
import Main from "./Main";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";
import Search from "./Search";
import Logo from "./Logo";
import NumFilms from "./NumFilms";
const KEY = "3292fa35";
const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [error, setError] = useState("");
  const [selectedId, setSlectedId] = useState(null);
  function handleSelectedId(id) {
    setSlectedId((selectedId) => (id === selectedId ? null : id));
  }
  function handleCloseId() {
    setSlectedId(null);
  }
  function handleDeleteWatch(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }
  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }
  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Some issue occured while fetching movies.");
          const data = await res.json();
          console.log("data we are getting", data.Search);
          setIsLoading(false);
          setError("");
          if (data.Response === "False") throw new Error("Movie not found.");
          setMovies(data.Search);
        } catch (error) {
          if (error.name !== "AbortError") {
            setError(error.message);
          }
          setMovies([]);
        } finally {
          setIsLoading(false);
        }
      }
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]

  );
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <>
      <Nav
        element={
          <>
            <Logo />
            <Search query={query} setQuery={setQuery} />
            <NumFilms movies={movies} />
          </>
        }
      />
      <Main>
        <LeftBox
          onSelectMovie={handleSelectedId}
          setIsOpen1={setIsOpen1}
          isOpen1={isOpen1}
          movies={movies}
          isLoading={isLoading}
          isError={error}
        />
        <RightBox
          KEY={KEY}
          onCloseMovie={handleCloseId}
          setIsOpen2={setIsOpen2}
          isOpen2={isOpen2}
          watched={watched}
          avgImdbRating={avgImdbRating}
          avgUserRating={avgUserRating}
          avgRuntime={avgRuntime}
          selectedId={selectedId}
          onAddWatched={handleAddWatched}
          handleDeleteWatch={handleDeleteWatch}
        />
      </Main>
    </>
  );
}
