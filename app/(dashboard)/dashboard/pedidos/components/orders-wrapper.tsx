"use client";

import { OrderBox } from "./order-box";

interface OrdersWrapperProps {
  orders: string[]; // TODO: adicionar tipo
}

export const OrdersWrapper = ({ orders }: OrdersWrapperProps) => {
  return (
    <div className="w-full flex flex-col gap-5">
      {/* TODO: criar estado vazio quando não apresentar pedidos */}
      {orders.map((order, index) => (
        <OrderBox key={`order-${index}`} />
      ))}
    </div>
  );
};
