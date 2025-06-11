import { ProfileFormBox } from "./components/profile-form-box";
import { PasswordFormBox } from "./components/password-form-box";

import { NavigationBox } from "./components/navigation-box";

const ProfilePage = () => {
  return (
    <div className="w-full px-6 -mt-11 sm:px-16 lg:container lg:mx-auto">
      <div className="w-full flex flex-col lg:flex-row lg:gap-6">
        <NavigationBox />

        <div className="w-full flex flex-col gap-4">
          <ProfileFormBox />

          <PasswordFormBox />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
