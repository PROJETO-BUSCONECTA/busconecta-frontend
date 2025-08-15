"use client";

import { OrderBox } from "./order-box";
import { NoOrderBox } from "./no-order-box";

interface OrdersWrapperProps {
    orders: string[]; // TODO: adicionar tipo
}

export const OrdersWrapper = ({ orders }: OrdersWrapperProps) => {
    return (
        <div className="w-full flex flex-col gap-5">
            {/* TODO: criar estado vazio quando não apresentar pedidos */}
            {orders.length > 0 ? orders.map((order, index) => <OrderBox key={`order-${index}`} />) : <NoOrderBox />}
        </div>
    );
};
