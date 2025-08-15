import { Suspense } from "react";

import { getAdminUsers } from "@/actions/queries/get-admin-users";

import { UsersTableBox, UsersTableBoxLoading } from "./components/users-table-box";
import { UsersFilterBox, UsersFilterBoxLoading } from "./components/users-filter-box";
import { AdminNavigationBox } from "../components/admin-navigation-box";

const UsersPage = async () => {
    const data = await getAdminUsers();

    console.log(data);

    return (
        <Suspense fallback={<UsersPageLoading />}>
            <div className="w-full px-6 -mt-11 pb-12 sm:px-16 lg:container lg:mx-auto">
                <div className="w-full flex flex-col lg:flex-row lg:gap-6">
                    <AdminNavigationBox />

                    <div className="w-full flex flex-col gap-6 lg:w-[calc(100%-288px-24px)]">
                        <UsersFilterBox />

                        <UsersTableBox />
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

const UsersPageLoading = () => {
    return (
        <div className="w-full px-6 -mt-11 pb-12 sm:px-16 lg:container lg:mx-auto">
            <div className="w-full flex flex-col lg:flex-row lg:gap-6">
                <AdminNavigationBox />

                <div className="w-full flex flex-col gap-6 lg:w-[calc(100%-288px-24px)]">
                    <UsersFilterBoxLoading />

                    <UsersTableBoxLoading />
                </div>
            </div>
        </div>
    );
};

export default UsersPage;
