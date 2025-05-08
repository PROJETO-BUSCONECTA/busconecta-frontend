import { Steps } from "../components/steps";
import { TravelFilter } from "../components/travel-filter";

const OriginPage = () => {
  return (
    <div className="w-full px-6 -mt-[126px]">
      <Steps step={0} />

      <TravelFilter />
    </div>
  );
};

export default OriginPage;
