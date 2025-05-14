import { Steps } from "../components/steps";
import { TravelForm } from "../components/travel-form";
import { TravelFilter } from "../components/travel-filter";
import { TravelWrapper } from "../components/travel-wrapper";
import { StatsAndFilter } from "../components/stats-and-filter";

const OriginPage = () => {
  return (
    <div className="w-full px-6 -mt-[126px] sm:px-16 lg:container lg:mx-auto">
      <Steps step={0} />

      <TravelForm />

      <div className="w-full flex gap-8">
        <TravelFilter />

        <div className="w-full flex flex-col gap-8">
          <StatsAndFilter />

          <TravelWrapper />
        </div>
      </div>
    </div>
  );
};

export default OriginPage;
