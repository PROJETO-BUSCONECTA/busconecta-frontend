import { InvoicingBox } from "./components/invoicing-box";
import { SalesValuesBox } from "./components/sales-values-box";
import { SalesChartsBox } from "./components/sales-charts-box";
import { AdminNavigationBox } from "./components/admin-navigation-box";
import { DashboardFilterBox } from "./components/dashboard-filter-box";
import { ChannelSalesChartsBox } from "./components/channel-sales-charts-box";

const AdminDashboardPage = () => {
  return (
    <div className="w-full px-6 -mt-11 pb-12 sm:px-16 lg:container lg:mx-auto">
      <div className="w-full flex flex-col lg:flex-row lg:gap-6">
        <AdminNavigationBox />

        <div className="w-full flex flex-col gap-6">
          <DashboardFilterBox />

          <div className="w-full flex flex-col gap-6 sm:grid sm:grid-cols-[250px_1fr]">
            <InvoicingBox />

            <SalesValuesBox />
          </div>

          <div className="w-full flex flex-col items-center gap-6 xl:flex-row">
            <SalesChartsBox />

            <ChannelSalesChartsBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
