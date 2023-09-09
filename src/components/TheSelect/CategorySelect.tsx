import { useAppDispatch } from "../../app/hooks.ts";
import { setSearchCategory } from "../../features/volumes/volumesSlice.ts";
import { ChangeEvent } from "react";
import TheSelect from "./TheSelect.tsx";
import { fetchVolumes } from "../../features/volumes/volumesThunk.ts";
import { selectCategory } from "../../features/volumes/volumesSelectors.ts";

type Category =
  | ""
  | "Art"
  | "Biography"
  | "Computers"
  | "History"
  | "Medical"
  | "Poetry";

const categories: Category[] = [
  "",
  "Art",
  "Biography",
  "Computers",
  "History",
  "Medical",
  "Poetry",
];

const CategorySelect = () => {
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSearchCategory(e.target.value as Category));
    dispatch(fetchVolumes());
  };

  return (
    <TheSelect
      selector={selectCategory}
      handler={handleChange}
      options={categories}
      label="Category"
    />
  );
};

export default CategorySelect;
