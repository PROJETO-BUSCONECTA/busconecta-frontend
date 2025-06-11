import { OrderBox } from "./order-box";

export const OrdersWrapper = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      {Array.from({ length: 5 }).map((arr, index) => (
        <OrderBox key={`order-${index}`} />
      ))}
    </div>
  );
};
