import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import { ROUTES } from "@/modules/common/constants/routes";
import clsx from "clsx";
import { mockUser } from "@/mock/userMock";

export const NavigationMenu = () => {
  return (
    <nav className={`d-flex flex-column flex-shrink-0 align-items-center gap-5 ${styles.navmenu}`}>
      <div className={`rounded-circle overflow-hidden ${styles.navmenu__user}`}>
        <img
          src={mockUser.avatar}
          alt="User avatar"
          className={styles.navmenu__avatar}
        />
      </div>
      
      <ul className="list-unstyled m-0 p-0 d-flex flex-column align-items-center gap-2">
        <li className={`${styles.navmenu__item}`}>
          <NavLink
            to={ROUTES.ORDERS}
            className={({ isActive }) =>
              clsx(styles.navmenu__link, {
                [styles.navmenu__link_active]: isActive,
              })
            }
          >
            Orders
          </NavLink>
        </li>

        <li className={`${styles.navmenu__item}`}>
          <NavLink
            to={ROUTES.PRODUCTS}
            className={({ isActive }) =>
              isActive
                ? `${styles.navmenu__link} ${styles.navmenu__link_active}`
                : styles.navmenu__link
            }
          >
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
