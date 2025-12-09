import { type FC } from "react";
import type { IProduct } from "@/modules/products/types/IProduct";
import { OrderProduct } from "@/modules/orders/components/OrderProduct";
import { CloseButton } from "@/modules/common/components/CloseButton";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  products: IProduct[];
  onClose: () => void;
}

export const OrderProductsList: FC<Props> = ({ products, title, onClose }) => {
  return (
    <div className="order-products bg-white p-4 shadow-sm rounded h-100 position-relative">
      <CloseButton
        className={styles["order-products__close"]}
        onClick={onClose}
      />
      <h5 className="order-products__title mb-4 fw-normal text-muted text-center border-bottom pb-2">
        {title}
      </h5>

      <div className="order-products__list list-group list-group-flush">
        {products.map((product: IProduct) => (
          <OrderProduct product={product} />
        ))}
      </div>
    </div>
  );
};
