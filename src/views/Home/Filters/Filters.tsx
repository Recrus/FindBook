import SearchInput from "../../../components/SearchInput/SearchInput.tsx";
import CategorySelect from "../../../components/TheSelect/CategorySelect.tsx";
import OrderSelect from "../../../components/TheSelect/OrderSelect.tsx";
import TheButton from "../../../components/TheButton/TheButton.tsx";
import { useAppDispatch } from "../../../app/hooks.ts";
import { resetAction } from "../../../features/volumes/volumesSlice.ts";

const Filters = () => {
  const dispatch = useAppDispatch();

  const handleReset = () => {
    dispatch(resetAction());
  };

  return (
    <div>
      <div className="flex-center m-4">
        <SearchInput />
      </div>
      <div className="text-center text-lg">Filters</div>
      <div className="flex flex-col m-4">
        <CategorySelect />
        <OrderSelect />
        <TheButton text={"Reset"} handler={handleReset} />
      </div>
    </div>
  );
};

export default Filters;
