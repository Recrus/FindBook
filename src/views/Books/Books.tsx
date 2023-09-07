import BookCard from "../../components/Book/BookCard.tsx";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { useEffect } from "react";
import {
  fetchVolumes,
  selectError,
  selectLoading,
} from "../../features/volumes/volumesSlice.ts";
import { VolumesSliceState } from "../../../types/types.ts";
import ErrorMessage from "../../components/Error/ErrorMessage.tsx";
import BookCardSkeleton from "../../components/Book/BookCardSkeleton.tsx";

const Books = () => {
  const dispatch = useAppDispatch();
  const args = {
    searchKey: "js",
  };

  useEffect(() => {
    // dispatch(fetchVolumes(args));
  }, []);

  const volumes: VolumesSliceState = useAppSelector((state) => state.volumes);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const PLACEHOLDER_CARDS: number = 30;

  return (
    <div className="flex flex-col justify-center items-center">
      {args.searchKey ? (
        loading ? (
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: PLACEHOLDER_CARDS }, (_, index) => (
              <BookCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-3 gap-4">
              {volumes.volumes.map((volume) => (
                <BookCard
                  title={volume.volumeInfo.title}
                  authors={volume.volumeInfo.authors}
                  categories={volume.volumeInfo.categories}
                  image={volume.volumeInfo.imageLinks}
                  key={volume.id}
                />
              ))}
              {/*//todo replace*/}
              <ErrorMessage error={error} />
            </div>
            <button className="mt-4 p-4 bg-blue rounded shadow-md hover:opacity-60 transition-all">
              Load More
            </button>
          </>
        )
      ) : (
        <div>Try to search something!</div>
      )}
      {/*todo fetch next page*/}
    </div>
  );
};

export default Books;
