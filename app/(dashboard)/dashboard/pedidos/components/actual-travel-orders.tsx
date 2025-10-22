import { OrderBox } from "./order-box";
import { NoOrderBox } from "./no-order-box";

interface ActualTravelOrdersProps {
  orders: string[]; // TODO: adicionar tipo
}

export const ActualTravelOrders = ({ orders }: ActualTravelOrdersProps) => {
  return (
    <div className="w-full flex flex-col gap-5">
      {/* TODO: criar estado vazio quando não apresentar pedidos */}
      {orders.length > 0 ? (
        orders.map((order, index) => <OrderBox key={`order-${index}`} />)
      ) : (
        <NoOrderBox />
      )}
    </div>
  );
};
