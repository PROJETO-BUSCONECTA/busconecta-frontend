import { Steps } from "../components/steps";
import { TravelFilter } from "../components/travel-filter";
import { StatsAndFilter } from "../components/stats-and-filter";

const OriginPage = () => {
  return (
    <div className="w-full px-6 -mt-[126px]">
      <Steps step={0} />

      <TravelFilter />

      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div />

        <div className="w-full flex flex-col gap-8">
          <StatsAndFilter />
        </div>
      </div>
    </div>
  );
};

export default OriginPage;
