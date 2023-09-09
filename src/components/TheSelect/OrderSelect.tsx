import { useAppDispatch } from "../../app/hooks.ts";
import { setSearchOrder } from "../../features/volumes/volumesSlice.ts";
import { ChangeEvent } from "react";
import TheSelect from "./TheSelect.tsx";
import { fetchVolumes } from "../../features/volumes/volumesThunk.ts";
import { selectOrder } from "../../features/volumes/volumesSelectors.ts";
import { Order } from "../../../types/types.ts";

const orders: Order[] = ["Relevance", "Newest"];

const OrderSelect = () => {
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSearchOrder(e.target.value as Order));
    dispatch(fetchVolumes());
  };

  return (
    <TheSelect
      selector={selectOrder}
      handler={handleChange}
      options={orders}
      label="Order"
    />
  );
};

export default OrderSelect;
