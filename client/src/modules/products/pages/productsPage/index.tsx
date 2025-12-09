import { productsMock } from "@/mock/dataMock";
import { ListTitle } from "@/modules/common/components/ListTitle";
import { ProductList } from "@/modules/products/components/ProductList";
import { useState } from "react";
import styles from "./styles.module.scss";
import { SelectInput } from "@/modules/common/components/SelectInput";

export const ProductsPage = () => {
  const [selectedType, setSelectedType] = useState<string>("all");
  const productTypes = ["all", ...new Set(productsMock.map((p) => p.type))];

  const filteredProducts =
    selectedType === "all"
      ? productsMock
      : productsMock.filter((p) => p.type === selectedType);

  return (
    <>
      <div className={`${styles.products} page`}>
        <div className="d-flex justify-content-start align-items-center gap-5 mb-4">
          <ListTitle title="Products" count={productsMock.length}/>

          <SelectInput
            title="Type"
            options={productTypes}
            value={selectedType}
            onChange={setSelectedType}
            allLabel="All types"
          />
        </div>

        <ProductList products={filteredProducts} />
      </div>
    </>
  );
};
