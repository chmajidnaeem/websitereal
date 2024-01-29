import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Header from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";
import Slides from "@/components/Slides";
import SlideInfo from "@/components/SlideInfo";
import Controls from "@/components/Controls";
import Cards from "@/components/Cards";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});
export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Home() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <main
      className={`
       ${inter.className}
        relative min-h-screen select-none overflow-hidden text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="  absolute z-20  h-full w-full">
          <Header />
          <div className="  sm:hidden flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
      <Cards />
    </main>
  );
}

const sliderData = [
  {
    img: "/dubaicity.webp",
    location: "DNK REAL ESTATE",
    description:
      "Find the perfect place to  live with your family",
    title: "DNK REAL ESTATE",
  },
  {
    img: "/villa.jpg",
    title: "Camelia Villas ",
    description:
      "Find the perfect place to  live with your family",
    location: "Camelia Villas",
  },
  {
    img: "/emaar.jpg",
    title: "Elvira by Emaar",
    description:
      "Find the perfect place to  live with your family",
    location: "Elvira by Emaar",
  },
  {
    img: "/damac.jpg",
    title: "DAMAC Bay by Cavalli",
    description:
      "Find the perfect place to  live with your family",
    location: "DAMAC Bay by Cavalli",
  },
  {
    img: "/southbay.png",
    title: "South Bay, Dubai",
    description:
      "Find the perfect place to  live with your family",
    location: "South Bay, Dubai",
  },
];

const initData = sliderData[0];
