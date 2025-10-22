"use client";

import { TabsContent } from "@/components/ui/tabs";
import { ActualTravelOrders } from "./actual-travel-orders";
import { HistoryTravelOrders } from "./history-travel-orders";

interface OrdersWrapperProps {
  orders: string[]; // TODO: adicionar tipo
}

export const OrdersWrapper = ({ orders }: OrdersWrapperProps) => {
  return (
    <>
      <TabsContent value="actual-travel">
        <ActualTravelOrders orders={orders} />
      </TabsContent>

      <TabsContent value="history-travel">
        <HistoryTravelOrders orders={orders} />
      </TabsContent>
    </>
  );
};
