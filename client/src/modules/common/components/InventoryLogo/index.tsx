import type { FC } from "react";
import styles from "./styles.module.scss";
import InventoryIcon from "@/assets/icons/inventory-logo.svg?react";
import { appConfig } from "@/config";

type SizeVariant = "small" | "medium" | "large";

interface Props {
  size?: SizeVariant;
};

export const InventoryLogo: FC<Props> = ({ size = "medium" }) => {
  return (
    <div className={`d-flex align-items-center gap-2 ${styles[size]}`}>
      <InventoryIcon className={styles.icon} />
      <span className={styles.text}>{appConfig.logoText}</span>
    </div>
  );
};

