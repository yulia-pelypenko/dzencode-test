import { useState, type FC } from "react";
import { DataList } from "@/modules/common/components/DataList";
import type { IOrder } from "@/modules/orders/types/IOrder";
import { OrderRow } from "@/modules/orders/components/OrderRow";
import styles from "./styles.module.scss";
import { OrderProductsList } from "@/modules/orders/components/OrderProductsList";

interface Props {
  orders: IOrder[];
}

export const OrderList: FC<Props> = ({ orders }) => {
  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);
  const opened = !!selectedOrderId;
  const selectedOrder = orders.find((order) => order.id === selectedOrderId);

  return (
    <div className="d-flex flex-row w-100 gap-4">
      <div
        className={`${styles.left} ${opened ? styles.opened : styles.closed}`}
      >
        <DataList className={`${styles.order__list}`}>
          {orders.map((order) => (
            <OrderRow
              key={order.id}
              order={order}
              selectedOrderId={selectedOrderId}
              onToggle={() =>
                setSelectedOrderId((prev) =>
                  prev === order.id ? null : order.id
                )
              }
            />
          ))}
        </DataList>
      </div>

      <div
        className={`${styles.right} ${
          opened ? styles.opened : styles.closed
        } border mt-2`}
      >
        {selectedOrder && (
          <OrderProductsList
            title={selectedOrder?.title}
            products={selectedOrder?.products}
            onClose={() => setSelectedOrderId(null)}
          />
        )}
      </div>
    </div>
  );
};
