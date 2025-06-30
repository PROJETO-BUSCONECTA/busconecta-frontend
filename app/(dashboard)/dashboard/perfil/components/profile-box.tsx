import { getProfile } from "@/actions/get-profile";
import { ProfileForm } from "./profile-form";

export const ProfileBox = async () => {
  const user = await getProfile();

  console.log({ user });

  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-md">
      <h4 className="text-foreground text-lg font-semibold mb-5 lg:text-xl">Dados do perfil</h4>

      <ProfileForm userData={user} />
    </div>
  );
};
