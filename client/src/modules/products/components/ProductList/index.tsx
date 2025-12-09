import type { FC } from "react";
import { DataList } from "@/modules/common/components/DataList";
import { ProductRow } from "../ProductRow";
import type { IProduct } from "@/modules/products/types/IProduct";

interface Props {
  products: IProduct[];
}

export const ProductList: FC<Props> = ({ products }) => {
  return (
    <DataList className="products__list">
      {products.map((product) => {
        return <ProductRow key={product.id} product={product} />;
      })}
    </DataList>
  );
};
