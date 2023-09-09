import { FC } from "react";
import { Link } from "react-router-dom";
export interface ViewErrorProps {
  title: string;
  text?: string;
}

const ViewError: FC<ViewErrorProps> = ({ title, text }) => {
  const linkClasses: string =
    "drop-shadow-lg p-4 bg-primary rounded transition-all hover:bg-accent hover:text-neutral";

  return (
    <div className="bg-gradient-to-r from-blue from-10% via-neutral via-40% to-grey to-90% h-screen flex-center items-center flex-col text-primary">
      <div className="mb-4 text-[54px]">{title}</div>
      {text ? <div className="mb-4 text-sm">{text}</div> : null}
      <div className="flex text-neutral">
        <Link to="/" className={linkClasses}>
          Go home
        </Link>
      </div>
    </div>
  );
};

export default ViewError;
