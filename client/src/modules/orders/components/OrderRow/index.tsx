import { useState, type FC } from "react";
import { DataRow } from "@/modules/common/components/DataRow";
import styles from "./styles.module.scss";
import type { IOrder } from "@/modules/orders/types/IOrder";
import { getProductsTotal } from "@/modules/orders/utils/getProductsTotal";
import { formatDate } from "@/modules/common/utils/formatDate";
import { ConfirmModal } from "@/modules/common/components/ConfirmModal";
import { DeleteButton } from "@/modules/common/components/DeleteButton";

interface Props {
  order: IOrder;
  selectedOrderId: null | number;
  onToggle: () => void;
}

export const OrderRow: FC<Props> = ({ order, selectedOrderId, onToggle }) => {
  const [showModal, setshowModal] = useState(false);

  const productTotal = getProductsTotal(order.products);
  const isSelected = order.id === selectedOrderId;
  const isShrunk = !!selectedOrderId;

  return (
    <>
      <div onClick={onToggle} className="mt-2">
        <DataRow
          className={`${styles.order} ${
            isShrunk ? styles.shrink : ""
          } mw-100 position-relative`}
        >
          <div className={`${styles.order__title} text-start`}>
            {order.title}
          </div>

          <div
            className={`${styles.order__products} d-flex flex-row align-items-center text-muted small gap-2`}
          >
            <div
              className={`${styles["order__products-icon"]} border rounded-circle p-2`}
            >
              <i className="bi bi-list-ul d-flex align-items-center justify-content-center" />
            </div>

            <div className={styles.order__count}>
              <span className="fw-bold fs-6">{order.products.length}</span>
              <br />
              <span>products</span>
            </div>
          </div>

          <div className={`${styles.order__date} d-flex flex-column`}>
            <span>{formatDate(new Date(order.date), "month/year")}</span>
            <span>{formatDate(new Date(order.date), "day/month/year")}</span>
          </div>

          <div
            className={`${styles.order__total} d-flex flex-column text-nowrap`}
          >
            {productTotal.map((price) => (
              <div key={price.symbol} className="fw-semibold">
                {price.value} {price.symbol}
              </div>
            ))}
          </div>

          <DeleteButton
            className={`${styles.order__delete}`}
            onClick={(e) => {
              e.stopPropagation();
              setshowModal(true);
            }}
          />

          {isSelected && (
            <div
              className={`${styles.activeIndicator} position-absolute top-0 end-0 bottom-0 d-flex align-items-center justify-content-center`}
            >
              <i className="bi bi-chevron-right" />
            </div>
          )}
        </DataRow>
      </div>
      
      {showModal && (
        <ConfirmModal
          title="Are you sure you want to delete this order?"
          onCancel={() => setshowModal(false)}
          onConfirm={() => setshowModal(false)}
        >
          <div className="fs-3">{order.title}</div>
        </ConfirmModal>
      )}
    </>
  );
};
