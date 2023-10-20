"use client";
import Image from "next/image";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
const mouseParallaxChild = [
  {
    id: 1,
    img: "/chilli-1.png",
    width: 160,
    height: 84,
    factorX: 0.2,
    factorY: 0.3,
    top: "top-6",
    left: "left-4",
  },
  {
    id: 2,
    img: "/chilli-2.png",
    width: 130,
    height: 84,
    factorX: 0.4,
    factorY: 0.4,
    top: "top-16",
    left: "-left-4",
  },
  {
    id: 3,
    img: "/garlic-1.png",
    width: 84,
    height: 72,
    factorX: 0.6,
    factorY: 0.6,
    top: "top-72",
    left: "-left-20",
  },
  {
    id: 4,
    img: "/garlic-2.png",
    width: 100,
    height: 72,
    factorX: 0.3,
    factorY: 0.6,
    top: "top-[20rem]",
    left: "-left-8",
  },
  {
    id: 5,
    img: "/garlic-3.png",
    width: 100,
    height: 72,
    factorX: 0.4,
    factorY: 1,
    top: "top-[22rem]",
    left: "-left-24",
  },
  {
    id: 6,
    img: "/leaves.png",
    width: 180,
    height: 72,
    factorX: 0.2,
    factorY: 0.2,
    top: "top-96",
    left: "-left-12",
  },
];
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
