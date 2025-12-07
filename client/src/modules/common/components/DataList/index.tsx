import type { FC, PropsWithChildren } from "react";
import styles from './styles.module.scss'

interface Props extends PropsWithChildren {
  className?: string;
}

export const DataList: FC<Props> = ({ children, className }) => {
  return (
    <ul className={`${styles.list} ${className ?? ""} overflow-x-auto list-unstyled d-flex flex-column flex-wrap gap-3 py-4`}>
      {children}
    </ul>
  );
}