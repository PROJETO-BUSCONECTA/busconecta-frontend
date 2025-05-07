import { Button } from "@/components/ui/button";
import { MoveRightIcon } from "lucide-react";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { TravelItem } from "./travel/travel-item";

export const Travels = () => {
  return (
    <section className="w-full px-6 pt-24 sm:px-16 lg:container lg:mx-auto">
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-4xl font-semibold">Viaje mais, pague menos</h2>

            <p className="text-base font-medium text-foreground/70">
              Veja nossas ofertas exclusivas e garanta sua próxima viagem por menos.
            </p>
          </div>

          <Button size="lg" variant="outline" className="w-fit">
            Ver mais
            <MoveRightIcon />
          </Button>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="-ml-1">
            <CarouselItem className="pl-1 basis-full md:basis-1/2 xl:basis-1/3 2xl:basis-1/4">
              <div className="p-6">
                <TravelItem />
              </div>
            </CarouselItem>

            <CarouselItem className="pl-1 basis-full md:basis-1/2 xl:basis-1/3 2xl:basis-1/4">
              <div className="p-6">
                <TravelItem />
              </div>
            </CarouselItem>

            <CarouselItem className="pl-1 basis-full md:basis-1/2 xl:basis-1/3 2xl:basis-1/4">
              <div className="p-6">
                <TravelItem />
              </div>
            </CarouselItem>

            <CarouselItem className="pl-1 basis-full md:basis-1/2 xl:basis-1/3 2xl:basis-1/4">
              <div className="p-6">
                <TravelItem />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
