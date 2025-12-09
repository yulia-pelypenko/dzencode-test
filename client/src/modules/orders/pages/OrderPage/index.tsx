import { ordersMock } from "@/mock/dataMock";
import { ListTitle } from "@/modules/common/components/ListTitle";
import { OrderList } from "@/modules/orders/components/OrdertList";

export const OrderPage = () => {
  return (
    <div className="my-5 page">
      <div className="mb-4">
        <ListTitle title="Orders" count={ordersMock.length} />
      </div>

      <OrderList orders={ordersMock} />
    </div>
  );
};
