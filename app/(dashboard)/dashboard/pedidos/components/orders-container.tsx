"use client";

import { useState } from "react";

import { Tabs } from "@/components/ui/tabs";
import { OrdersWrapper } from "./orders-wrapper";
import { OrderFilterBox } from "./order-filter-box";

interface OrdersContainerProps {
  orders: string[];
}

export const OrdersContainer = ({ orders }: OrdersContainerProps) => {
  return (
    <Tabs className="w-full flex flex-col gap-9">
      <OrderFilterBox />

      <OrdersWrapper orders={orders} />
    </Tabs>
  );
};
