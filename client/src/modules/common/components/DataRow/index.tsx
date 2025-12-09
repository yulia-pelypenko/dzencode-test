import type { FC, PropsWithChildren } from "react";
import styles from './styles.module.scss'

interface Props extends PropsWithChildren {
  className?: string;
}

export const DataRow: FC<Props> = ({ children, className }) => (
  <li className={`${styles.list__row} bg-white rounded border p-3 d-flex align-items-center text-center gap-5 justify-content-between ${className ?? ""}`}>
    {children}
  </li>
);