import { Steps } from "../components/steps";
import { StatusBox } from "./components/status-box";
import { OrderCodeBox } from "./components/order-code-box";
import { PaymentInfoBox } from "./components/payment-info-box";
import { OriginTravelBox } from "./components/origin-travel-box";
import { DepartureTravelBox } from "./components/departure-travel-box";

const ResumePage = () => {
  return (
    <div className="w-full px-6 -mt-[126px] pb-12 sm:px-16 lg:container lg:mx-auto">
      <Steps step={3} />

      <div className="w-full flex flex-col gap-6 lg:flex-row">
        <div className="w-full flex flex-col items-center gap-6 lg:w-fit lg:min-w-sm">
          <OrderCodeBox />

          <PaymentInfoBox />
        </div>

        <div className="w-full flex flex-col items-center gap-6">
          <StatusBox status="success" />

          <OriginTravelBox />

          <DepartureTravelBox />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
