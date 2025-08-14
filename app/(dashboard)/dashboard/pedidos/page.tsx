import { OrdersWrapper } from "./components/orders-wrapper";
import { OrderFilterBox } from "./components/order-filter-box";
import { NavigationBox } from "../components/navigation-box";
import { getAllOrders } from "@/actions/queries/get-all-orders";

const OrdersPage = async () => {
    const orders = await getAllOrders();

    console.log({ orders });

    return (
        <div className="w-full px-6 -mt-11 sm:px-16 lg:container lg:mx-auto">
            <div className="w-full flex flex-col lg:flex-row lg:gap-6">
                <NavigationBox />

                <div className="w-full flex flex-col gap-9">
                    <OrderFilterBox />

                    <OrdersWrapper orders={orders} />
                </div>
            </div>
        </div>
    );
};

export default OrdersPage;
