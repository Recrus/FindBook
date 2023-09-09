import { FC } from "react";
import { TheButtonProps } from "../../../types/types.ts";

const TheButton: FC<TheButtonProps> = ({ text, handler }) => {
  return (
    <button
      className="mt-4 p-4 bg-blue rounded shadow-md hover:opacity-60 transition-all"
      onClick={handler}
    >
      {text}
    </button>
  );
};

export default TheButton;
