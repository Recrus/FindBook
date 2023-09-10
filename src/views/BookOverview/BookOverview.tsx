import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  addBreadcrumb,
  removeLastBreadcrumb,
} from "../../features/breadcrumbs/breadcrumbsSlice.ts";
import { useAppDispatch } from "../../app/hooks.ts";
import { Volume } from "../../../types/types.ts";
import bookMock from "../../assets/book.svg";

const BookOverview = () => {
  const { state } = useLocation();
  const volume: Volume = state.volume;
  const dispatch = useAppDispatch();

  function capitalizeFirstLetter(str: string) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  useEffect(() => {
    dispatch(
      addBreadcrumb({
        label: `${capitalizeFirstLetter(volume.volumeInfo.title)}`,
        href: `${volume.id}`,
      }),
    );
    return () => {
      dispatch(removeLastBreadcrumb());
    };
  }, []);

  return (
    <div className="mx-4 p-4 bg-primary rounded shadow-md flex flex-col items-center lg:items-start lg:grid lg:grid-cols-4">
      {volume.volumeInfo.imageLinks?.thumbnail ? (
        <div
          className="bg-contain bg-no-repeat bg-center h-96 w-64"
          style={{
            backgroundImage: `url(${volume.volumeInfo.imageLinks.thumbnail})`,
          }}
        ></div>
      ) : (
        <div className="flex-center">
          <img className="h-96 w-40" src={bookMock} />
        </div>
      )}
      <div className="mt-2 lg:ml-4 lg:mt-0 px-4 lg:col-span-3 lg:pr-10">
        <div className="max-w-fit mb-4">
          {volume.volumeInfo.categories ? (
            <div className="truncate text-ellipsis max-w-[12rem] bg-blue p-2 rounded">
              {volume.volumeInfo.categories.join(", ")}
            </div>
          ) : (
            <div className="max-w-36 bg-grey p-2 rounded">
              This book doesn't have category
            </div>
          )}
        </div>
        <div className="text-lg font-semibold mb-2">
          {volume.volumeInfo.title}
        </div>
        <div className="opacity-60 mb-4">
          {volume.volumeInfo.authors && volume.volumeInfo.authors.length > 0
            ? volume.volumeInfo.authors.length > 1
              ? "By " +
                volume.volumeInfo.authors.slice(0, -1).join(", ") +
                " and " +
                volume.volumeInfo.authors.slice(-1)
              : "By " + volume.volumeInfo.authors[0]
            : "Author is unknown"}
        </div>
        {volume.volumeInfo.description ? (
          <>
            <label htmlFor="description">Description:</label>
            <div
              id="description"
              className="border-neutral border-2 p-2 rounded mt-2 max-h-64 overflow-scroll"
            >
              {volume.volumeInfo.description}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default BookOverview;
