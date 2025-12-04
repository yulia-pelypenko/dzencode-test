import type { FC } from "react";
import styles from "./styles.module.scss";
import { InventoryLogo } from "@common/components/InventoryLogo";
import ClockIcon from "@/assets/icons/clock.svg?react";

import { formatTime } from "@/modules/common/utils/formatTime";
import { useDate } from "@/modules/common/utils/useDate";
import { formatDate } from "@/modules/common/utils/formatDate";

export const TopMenu: FC = () => {
  const { date } = useDate();

  const formatedTime = formatTime(date);
  const formatedDate = formatDate(date)


  return (
    <header className={`d-flex justify-content-between align-items-center ${styles.topmenu}`}>
      <div className="d-flex align-items-center gap-3">
        <InventoryLogo />
      </div>

      <div className={`d-flex align-items-end gap-4 ${styles.topmenu__datetime}`}>
        <div className="text-start">
          <div className={styles.topmenu__today}>Today</div>
          <div className={styles.topmenu__date}>{formatedDate}</div>
        </div>

        <div className="d-flex align-items-center gap-2">
          <ClockIcon className={styles.topmenu__clock} />
          <span className={styles.topmenu__time}>{formatedTime}</span>
        </div>
      </div>
    </header>
  );
};

