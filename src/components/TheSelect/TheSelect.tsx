import { ChangeEvent, FC } from "react";
import { useAppSelector } from "../../app/hooks.ts";
import { VolumesSliceState } from "../../../types/types.ts";

interface SelectProps {
  selector: (state: { volumes: VolumesSliceState }) => string;
  options: string[];
  label: string;
  handler: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const TheSelect: FC<SelectProps> = ({ selector, options, label, handler }) => {
  const selectedValue = useAppSelector(selector);

  return (
    <div className="flex-between items-center w-full">
      <label htmlFor={`${label.toLowerCase()}-select`} className="mr-2">
        {label}
      </label>
      <select
        id={`${label.toLowerCase()}-select`}
        value={selectedValue}
        onChange={handler}
        className="mt-1 w-40 py-2 px-4 rounded shadow-md hover:opacity-80 transition-all"
      >
        {options.map((option) => (
          <option key={option} value={option.toLowerCase()}>
            {option || (label === "Category" ? "All" : "Relevance")}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TheSelect;
