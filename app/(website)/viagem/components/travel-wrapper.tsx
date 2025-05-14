import { TravelItem } from "./travel-item";

export const TravelWrapper = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <TravelItem
        imageSrc="/images/logo-placeholder.svg"
        startTime="05:00"
        endTime="06:35"
        duration="6h 30min"
        origin="Rio de Janeiro, RJ - Rodov. do Rio"
        destination="São Paulo, SP - Tiete"
        seatType="Semi-leito"
        price={13491}
      />
    </div>
  );
};
