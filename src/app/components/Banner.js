"use client";
import Image from "next/image";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { mouseParallaxChild } from "@/data/data";
const Banner = () => {
  return (
    <section className="bg-primary bg-pattern  lg:min-h-[768px] pt-16 lg:pt-16">
      <div
        className="container mx-auto  min-h-[768px] 
  flex items-center justify-center "
      >
        <MouseParallaxContainer
          globalFactorX={0.4}
          globalFactorY={0.3}
          resetOnLeave
          className="w-full flex flex-col lg:flex-row justify-between items-center"
        >
          <MouseParallaxChild factorX={0.1} factorY={0.2}>
            <div
              className="flex flex-col lg:flex-row items-center 
            text-center lg:text-left flex-1 px-6 text-white"
            >
              <div className="flex-1">
                <div
                  className="font-bangers text-[32px] 
                text-white uppercase tracking-[0.03em]"
                >
                  Best pizza in town
                </div>

                <h1 className="text-6xl font-bangers lg:text-8xl drop-shadow-md">
                  Pizza perfection <br /> in every bite
                </h1>
              </div>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.2} factorY={0.3} className="relative">
            <div className="flex flex-col lg:flex-row items-center text-center lg:text-left flex-1 px-6">
              <div className="flex justify-end max-w-sm lg:max-w-max">
                <Image
                  src={"/pizza-banner.png"}
                  height={550}
                  width={550}
                  alt=""
                  priority={1}
                />
              </div>
            </div>
            {mouseParallaxChild.map(
              ({ id, factorX, factorY, top, left, img, height, width }) => (
                <MouseParallaxChild
                  key={id}
                  factorX={factorX}
                  factorY={factorY}
                  className={`absolute  ${top} ${left} hidden xl:flex`}
                >
                  <Image
                    src={img}
                    height={height}
                    width={width}
                    alt=""
                    priority={1}
                  />
                </MouseParallaxChild>
              )
            )}
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </section>
  );
};

export default Banner;
