import { ROUTES } from "@/modules/common/constants/routes";
import type { IModulePage } from "@/modules/common/types/IModulePage";
import { ProductsPage } from "@/modules/products/pages/productsPage";


const ProductsPages: IModulePage[] = [
  {
    component: ProductsPage,
    route: ROUTES.PRODUCTS
  },
]

export default ProductsPages;