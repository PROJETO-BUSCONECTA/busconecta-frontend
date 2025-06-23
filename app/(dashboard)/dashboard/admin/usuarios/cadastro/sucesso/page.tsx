import { SuccessMessageBox } from "./components/success-message-box";
import { AdminNavigationBox } from "../../../components/admin-navigation-box";

const UserRegisterSuccessPage = () => {
  return (
    <div className="w-full px-6 -mt-11 pb-12 sm:px-16 lg:container lg:mx-auto">
      <div className="w-full flex flex-col lg:flex-row lg:gap-6">
        <AdminNavigationBox />

        <div className="w-full flex flex-col gap-6 lg:w-[calc(100%-288px-24px)]">
          <SuccessMessageBox />
        </div>
      </div>
    </div>
  );
};

export default UserRegisterSuccessPage;
