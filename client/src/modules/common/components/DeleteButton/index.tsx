import type { FC, ButtonHTMLAttributes } from "react";

export const DeleteButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className = "",
  ...props
}) => {
  return (
    <button
      {...props}
      className={`delete-btn btn border-0 p-1 btn-outline-danger ${className}`}
    >
      <i className="bi bi-trash"></i>
    </button>
  );
};
