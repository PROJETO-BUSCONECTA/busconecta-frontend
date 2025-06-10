import { Steps } from "../components/steps";
import { OrderResume } from "./components/order-resume";
import { TravelResume } from "./components/travel-resume";
import { OrderForm } from "./components/order-forms";

const PaymentPage = () => {
  return (
    <div className="w-full px-6 -mt-[126px] pb-12 sm:px-16 lg:container lg:mx-auto">
      <Steps step={2} />

      <div className="w-full flex flex-col gap-6 lg:flex-row">
        <div className="w-full flex flex-col items-center gap-6 lg:w-fit lg:min-w-sm">
          <TravelResume />

          <OrderResume />
        </div>

        <OrderForm />
      </div>
    </div>
  );
};

export default PaymentPage;
