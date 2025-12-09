import { useState, type FC } from "react";
import type { IProduct } from "@/modules/products/types/IProduct";
import { DeleteButton } from "@/modules/common/components/DeleteButton";
import { ConfirmModal } from "@/modules/common/components/ConfirmModal";
import styles from './styles.module.scss'

interface Props {
  product: IProduct;
}

export const OrderProduct: FC<Props> = ({ product }) => {
  const [showModal, setshowModal] = useState(false);

  return (
    <div className="order-products__item list-group-item d-flex align-items-center p-3 gap-4">
      <div className={`${styles["order-products__image-wrap"]}`}>
        <img
          className={`order-products__image`}
          src={product.photo}
          alt={product.type}
        />
      </div>

      <div className="order-products__info flex-grow-1">
        <div className="order-products__name fs-semibold small">
          {product.title}
        </div>
        <div className="order-products__serial text-muted small">
          SN: {product.serialNumber}
        </div>
      </div>

      <DeleteButton onClick={() =>setshowModal(true)} />
      
      {showModal && (
        <ConfirmModal
          title="Are you sure you want to delete this products?"
          onCancel={() => setshowModal(false)}
          onConfirm={() => setshowModal(false)}
        >
          <div className="fm-semibold">{product.title}</div>
        </ConfirmModal>
      )}
    </div>
  );
};
