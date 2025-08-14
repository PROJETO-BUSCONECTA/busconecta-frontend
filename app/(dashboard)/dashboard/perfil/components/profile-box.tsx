import { getProfile } from "@/actions/queries/get-profile";

import { ProfileForm } from "./profile-form";

export const ProfileBox = async () => {
  const data = await getProfile();

  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-md">
      <h4 className="text-foreground text-lg font-semibold mb-5 lg:text-xl">Dados do perfil</h4>

      <ProfileForm userData={data} />
    </div>
  );
};
