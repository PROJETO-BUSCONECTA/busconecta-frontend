import { SalesTableBox } from "./components/sales-table-box";
import { SalesFilterBox } from "./components/sales-filter-box";
import { AdminNavigationBox } from "../components/admin-navigation-box";

const SalesPage = () => {
  return (
    <div className="w-full px-6 -mt-11 pb-12 sm:px-16 lg:container lg:mx-auto">
      <div className="w-full flex flex-col lg:flex-row lg:gap-6">
        <AdminNavigationBox />

        <div className="w-full flex flex-col gap-6">
          <SalesFilterBox />

          <SalesTableBox />
        </div>
      </div>
    </div>
  );
};

export default SalesPage;
