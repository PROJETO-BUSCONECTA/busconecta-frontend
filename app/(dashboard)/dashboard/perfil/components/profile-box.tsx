import { Suspense } from "react";

import { getProfile } from "@/actions/queries/get-profile";

import { ProfileForm, ProfileFormLoading } from "./profile-form";

export const ProfileBox = async () => {
    const res = await getProfile();

    return (
        <Suspense fallback={<ProfileBoxLoading />}>
            <div className="w-full bg-white p-6 rounded-2xl shadow-md">
                <h4 className="text-foreground text-lg font-semibold mb-5 lg:text-xl">Dados do perfil</h4>

                <ProfileForm userData={res.data} />
            </div>
        </Suspense>
    );
};

const ProfileBoxLoading = () => {
    return (
        <div className="w-full bg-white p-6 rounded-2xl shadow-md">
            <h4 className="text-foreground text-lg font-semibold mb-5 lg:text-xl">Dados do perfil</h4>

            <ProfileFormLoading />
        </div>
    );
};
