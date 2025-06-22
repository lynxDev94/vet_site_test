"use client";

import { Carousel } from "./ui/carousel";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CarouselDemo({images}: any) {

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={images} />
    </div>
  );
}
