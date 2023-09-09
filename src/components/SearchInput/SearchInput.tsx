import {
  setSearchCategory,
  setSearchKey,
} from "../../features/volumes/volumesSlice.ts";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { debounce } from "lodash";
import { fetchVolumes } from "../../features/volumes/volumesThunk.ts";
import { selectSearchKey } from "../../features/volumes/volumesSelectors.ts";

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const searchKey = useAppSelector(selectSearchKey);

  const handleSearch = debounce(() => {
    try {
      dispatch(fetchVolumes());
    } catch (e) {
      console.log(e);
    }
  }, 750);

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="placeholder:text-neutral placeholder:opacity-60 placeholder:pl-2 p-2 rounded shadow-md mr-2 w-full hover:opacity-80 transition-all"
        value={searchKey}
        onChange={(e) => {
          dispatch(setSearchKey(e.target.value));
          dispatch(setSearchCategory(""));
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button onClick={handleSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 hover:text-blue transition-all"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </>
  );
};

export default SearchInput;
