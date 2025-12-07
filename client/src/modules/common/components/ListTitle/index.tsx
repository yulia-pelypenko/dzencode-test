import type { FC } from "react";

interface Props {
  title: string;
  count?: number;
}

export const ListTitle: FC<Props> = ({ title, count }) => {
  return (
    <div className="d-flex align-items-center gap-2">
      <h2 className="h5 m-0 fw-bold">
        {title}
        {count && (
          <span className="text-muted fw-bold"> / {count}</span>
        )}
      </h2>
    </div>
  );
};
