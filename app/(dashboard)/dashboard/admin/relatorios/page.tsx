import { Suspense } from "react";

import { getAdminReport } from "@/actions/queries/get-admin-report";

import { AdminNavigationBox } from "../components/admin-navigation-box";
import { ReportTableBox, ReportTableBoxLoading } from "./components/report-table-box";
import { SalesChartsBox, SalesChartsBoxLoading } from "../components/sales-charts-box";
import { ReportFilterBox, ReportFilterBoxLoading } from "./components/report-filter-box";
import { ChannelSalesChartsBox, ChannelSalesChartsBoxLoading } from "../components/channel-sales-charts-box";

const ReportPage = async () => {
    const data = await getAdminReport();

    console.log({ reportData: data });

    return (
        <Suspense fallback={<ReportPageLoading />}>
            <div className="w-full px-6 -mt-11 pb-12 sm:px-16 lg:container lg:mx-auto">
                <div className="w-full flex flex-col lg:flex-row lg:gap-6">
                    <AdminNavigationBox />

                    <div className="w-full flex flex-col gap-6 lg:w-[calc(100%-288px-24px)]">
                        <ReportFilterBox />

                        <ReportTableBox />

                        <div className="w-full flex flex-col items-center gap-6 xl:flex-row">
                            <SalesChartsBox />

                            <ChannelSalesChartsBox />
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

const ReportPageLoading = () => {
    return (
        <div className="w-full px-6 -mt-11 pb-12 sm:px-16 lg:container lg:mx-auto">
            <div className="w-full flex flex-col lg:flex-row lg:gap-6">
                <AdminNavigationBox />

                <div className="w-full flex flex-col gap-6 lg:w-[calc(100%-288px-24px)]">
                    <ReportFilterBoxLoading />

                    <ReportTableBoxLoading />

                    <div className="w-full flex flex-col items-center gap-6 xl:flex-row">
                        <SalesChartsBoxLoading />

                        <ChannelSalesChartsBoxLoading />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportPage;
