import type { FC } from "react";
import styles from './styles.module.scss'

interface Props {
  title?: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  allLabel?: string;
  className?: string;
}

export const SelectInput: FC<Props> = ({
  title,
  options,
  value,
  onChange,
  allLabel = "All types",
  className,
}) => {
  return (
    <div className={`d-flex flex-row gap-1 align-items-center ${className ?? ""}`}>
      {title && <label className="form-label mb-0 me-1 text-nowrap">{title}:</label>}
      <select
        className={`${styles.select} form-select`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt === "all" ? allLabel : opt}
          </option>
        ))}
      </select>
    </div>
  );
};
