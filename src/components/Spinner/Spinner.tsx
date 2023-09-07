import { CSSProperties, FC } from "react";

interface SpinnerProps {
  size?: number;
  color?: string;
}

const Spinner: FC<SpinnerProps> = ({ size = 40, color = "#00f" }) => {
  const spinnerStyle: CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    border: `4px solid rgba(0, 0, 0, 0.1)`,
    borderTopColor: color,
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };

  //todo delete
  return (
    <div className="flex-center items-center">
      <div style={spinnerStyle}></div>
      <style>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Spinner;
