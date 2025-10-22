import { NavigationBox } from "../components/navigation-box";
import { OrdersContainer } from "./components/orders-container";

import { getAllOrders } from "@/actions/queries/get-all-orders";

const OrdersPage = async () => {
  const res = await getAllOrders();

  if (!res.data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full px-6 -mt-11 sm:px-16 lg:container lg:mx-auto">
      <div className="w-full flex flex-col lg:flex-row lg:gap-6">
        <NavigationBox />

        <OrdersContainer orders={res.data} />
      </div>
    </div>
  );
};

export default OrdersPage;
