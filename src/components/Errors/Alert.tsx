import { FC, useEffect, useState } from "react";

interface AlertProps {
  message: string | null;
  type?: "success" | "info" | "warning" | "error";
  onClose?: () => void;
}

const Alert: FC<AlertProps> = ({ message, type = "info", onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const getAlertBgColor = () => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "info":
        return "bg-blue-500";
      case "warning":
        return "bg-yellow-500";
      case "error":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) {
        setTimeout(onClose, 2000);
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div
      className={`flex items-center justify-between p-4 border-l-4 ${getAlertBgColor()} text-white fixed bottom-14 right-8 
      ${
        isVisible
          ? "opacity-100 transition-opacity duration-2000"
          : "opacity-0 transition-opacity duration-2000"
      }`}
      role="alert"
    >
      <span>{message}</span>
    </div>
  );
};

export default Alert;
