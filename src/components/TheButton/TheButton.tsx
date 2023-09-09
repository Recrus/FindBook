import { FC } from "react";

interface TheButtonProps {
  text: string;
  handler: () => void;
}

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
