import type { FC } from "react";
import styles from "./styles.module.scss";

interface Props {
  onClick: () => void;
  className?: string;
}

export const CloseButton: FC<Props> = ({ onClick, className }) => {
  return (
    <button
      type="button"
      className={`${
        styles["close-button"]
      } rounded-circle d-flex border p-0 bg-white shadow-sm border text-secondary align-items-center justify-content-center ${
        className ?? ""
      }`}
      onClick={onClick}
    >
      ✕
    </button>
  );
};
