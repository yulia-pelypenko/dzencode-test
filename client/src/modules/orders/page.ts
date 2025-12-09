import { ROUTES } from "@/modules/common/constants/routes";
import type { IModulePage } from "@/modules/common/types/IModulePage";
import { OrderPage } from "@/modules/orders/pages/OrderPage";


const OrdersPages: IModulePage[] = [
  {
    component: OrderPage,
    route: ROUTES.ORDERS
  },
]

export default OrdersPages;