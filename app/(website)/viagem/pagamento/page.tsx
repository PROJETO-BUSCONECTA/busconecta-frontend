import { Steps } from "../components/steps";
import { OrderResume } from "./components/order-resume";
import { TravelResume } from "./components/travel-resume";
import { PaymentForm } from "./components/payment-form";

const PaymentPage = () => {
  return (
    <div className="w-full px-6 -mt-[126px] sm:px-16 lg:container lg:mx-auto">
      <Steps step={2} />

      <div className="w-full flex flex-col gap-6 lg:flex-row">
        <div className="w-full flex flex-col items-center gap-6">
          <TravelResume />

          <OrderResume />
        </div>

        <PaymentForm />
      </div>
    </div>
  );
};

export default PaymentPage;
