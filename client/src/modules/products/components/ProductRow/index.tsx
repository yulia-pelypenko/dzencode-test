import type { FC } from "react";
import { DataRow } from "@/modules/common/components/DataRow";
import styles from "./styles.module.scss";
import { formatDate, type DateFormat } from "@/modules/common/utils/formatDate";
import type { IProduct } from "@/modules/types/IProduct";
import { ordersMock } from "@/mock/dataMock";

interface Props {
  product: IProduct;
}

export const ProductRow: FC<Props> = ({ product }) => {
  const order = ordersMock.find((o) => o.id === product.order);
  const guaranteeStart = new Date(product.guarantee.start);
  const guaranteeEnd = new Date(product.guarantee.end);

  const GuaranteeRow = (format: DateFormat) => (
    <div className="text-muted small text-nowrap">
      from {formatDate(guaranteeStart, format)} to {formatDate(guaranteeEnd, format)}
    </div>
  );

  return (
    <DataRow className={styles.product}>
      <div className={`${styles.product__title} flex-grow-1 text-start`}>
        {product.title}
      </div>

      <img src={product.photo} alt={product.type} className={styles.product__photo} />

      <div className={styles.product__type}>{product.type}</div>

      <div className="d-flex flex-column text-nowrap">
        {GuaranteeRow("iso-date")}
        {GuaranteeRow("short")}
      </div>

      <div className="d-flex flex-column text-nowrap">
        {product.price.map((price) => (
          <div key={price.symbol} className="fw-semibold">
            {price.value} {price.symbol}
          </div>
        ))}
      </div>

      <div className={`${styles.product__order} flex-grow-1`}>
        {order?.title ?? "—"}
      </div>
    </DataRow>
  );
};
