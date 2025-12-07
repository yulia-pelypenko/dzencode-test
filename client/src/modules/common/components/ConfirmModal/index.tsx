import type { FC, ReactNode } from "react";
import styles from "./styles.module.scss";
import BucketIcon from "@/assets/icons/icon-bucket.svg?react";

interface Props {
  title?: string;
  text?: string;
  children?: ReactNode;
  confirmText?: string;
  cancelText?: string;
  icon?: FC<React.SVGProps<SVGSVGElement>>;
  onCancel: () => void;
  onConfirm: () => void;
};

export const ConfirmModal: FC<Props> = ({
  title = "Вы уверены",
  text,
  children,
  confirmText = "Удалить",
  cancelText = "Отменить",
  icon: Icon = BucketIcon,
  onCancel,
  onConfirm,
}) => {
  return (
    <div className={styles.backdrop}>
      <div className={`modal show d-block`} tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className={`modal-content ${styles.modal__content}`}>
            <button
              type="button"
              className={styles.modal__close}
              onClick={onCancel}
            >
              ✕
            </button>

            <div className="modal-header">
              <h5 className={`modal-title ${styles.modal__title}`}>{title}</h5>
            </div>

            <div className={`modal-body d-flex align-items-center gap-3 px-4`}>
              {children ?? <p>{text}</p>}
            </div>

            <div
              className={`modal-footer justify-content-end gap-3 ${styles.modal__footer}`}
            >
              <button
                type="button"
                className={styles.modal__cancel}
                onClick={onCancel}
              >
                {cancelText}
              </button>

              <button
                type="button"
                className={styles.modal__delete}
                onClick={onConfirm}
              >
                <Icon className={styles["modal__delete-icon"]} />
                {confirmText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
