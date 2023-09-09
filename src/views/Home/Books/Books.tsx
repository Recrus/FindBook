import BookCard from "../../../components/Book/BookCard.tsx";
import { useAppDispatch, useAppSelector } from "../../../app/hooks.ts";
import { loadMore } from "../../../features/volumes/volumesSlice.ts";
import { VolumesSliceState } from "../../../../types/types.ts";
import BookCardSkeleton from "../../../components/Book/BookCardSkeleton.tsx";
import { Link } from "react-router-dom";
import TheButton from "../../../components/TheButton/TheButton.tsx";
import { fetchVolumes } from "../../../features/volumes/volumesThunk.ts";
import { useEffect, useState } from "react";
import {
  selectError,
  selectLoading,
  selectTotalItems,
} from "../../../features/volumes/volumesSelectors.ts";
import Alert from "../../../components/Errors/Alert.tsx";

const Books = () => {
  const dispatch = useAppDispatch();
  const volumes: VolumesSliceState = useAppSelector((state) => state.volumes);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const totalItems = useAppSelector(selectTotalItems);
  const PLACEHOLDER_CARDS: number = 30;
  const [showAlert, setShowAlert] = useState(false);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    dispatch(fetchVolumes());
  }, []);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    }
  }, [error]);

  const handleLoadMore = () => {
    dispatch(loadMore());
    dispatch(fetchVolumes());
  };

  return (
    <div className="flex flex-col">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="mb-4 bg-primary w-full text-center py-2 rounded shadow-md flex-center items-center">
            Found:{" "}
            <div className="h-4 w-12 ml-2 opacity-40 bg-accent animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {Array.from({ length: PLACEHOLDER_CARDS }, (_, index) => (
              <BookCardSkeleton key={index} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          {totalItems !== 0 ? (
            <>
              <div className="mb-4 bg-primary w-full text-center py-2 rounded shadow-md">
                Found: {totalItems}
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {volumes.volumes.map((volume) => (
                  <Link
                    to={`${volume.id}`}
                    state={{ volume: volume }}
                    key={volume.id}
                    className="hover:opacity-80 transition-all w-72 xl:w-80 p-4 flex flex-col bg-primary rounded shadow-md"
                  >
                    <BookCard
                      title={volume.volumeInfo.title}
                      authors={volume.volumeInfo.authors}
                      categories={volume.volumeInfo.categories}
                      image={volume.volumeInfo.imageLinks}
                    />
                  </Link>
                ))}
              </div>
              <TheButton text={"Load more"} handler={handleLoadMore} />
            </>
          ) : (
            <div className="mb-4 flex flex-col items-center">
              <p>No results found</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="red"
                className="w-14 h-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                />
              </svg>
            </div>
          )}
        </div>
      )}
      {showAlert ? (
        <Alert message={error} onClose={handleCloseAlert} type={"error"} />
      ) : null}
    </div>
  );
};

export default Books;
