import Summary from "./Summary";
import List from "./List";
import SelectedId from "./SelectedId";
export default function RightBox({
  setIsOpen2,
  isOpen2,
  watched,
  avgImdbRating,
  avgUserRating,
  avgRuntime,
  selectedId,
  onCloseMovie,
  KEY,
  onAddWatched,
  handleDeleteWatch,
}) {
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && selectedId ? (
        <SelectedId
          selectedId={selectedId}
          onCloseMovie={onCloseMovie}
          KEY={KEY}
          onAddWatched={onAddWatched}
          watched={watched}
        />
      ) : (
        <>
          <Summary
            watched={watched}
            avgImdbRating={avgImdbRating}
            avgUserRating={avgUserRating}
            avgRuntime={avgRuntime}
          />
          <List watched={watched} handleDeleteWatch={handleDeleteWatch} />
        </>
      )}
    </div>
  );
}
