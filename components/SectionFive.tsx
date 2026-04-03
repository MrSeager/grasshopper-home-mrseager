'use client';
//Components
import Image from "next/image";
import { useState } from "react";
import SectionThreeBtn from "./SectionThreeBtn";
//Icons
import { FaLaptop, FaMobileAlt, FaTabletAlt  } from "react-icons/fa";

export default function SectionFive() {
    const [currSlide, setCurrSlide] = useState<number>(0);

    const SlideText = {
        sliders:
        [
            {
                ico: FaLaptop,
                h: "Slide 1",
                img: "/images/laptop-png-17.png"
            },
            {
                ico: FaMobileAlt,
                h: "Slide 2",
                img: "/images/pngtree-mobile-phonein-hand-communicate-png-image_10247487.png"
            },
            {
                ico: FaTabletAlt,
                h: "Slide 3",
                img: "/images/one-hand-holding-tablet-transparent-png-stickpng-7.png"
            }
        ]
    };

    const Icon = SlideText.sliders[currSlide].ico;

    return(
        <div className="grid grid-rows-2 grid-cols-2 py-15 overflow-hidden">
            <div className="flex items-end ps-5 md:ps-15 lg:ps-50">
                <div 
                    key={currSlide}
                    className="text-[#43687a] flex flex-col items-start animate-[fadeInUp_0.5s_ease-out] duration-500"
                >
                    <div className="text-[#fcfcfc] bg-[#43687a] rounded-full p-2">
                        <Icon size={25} />
                    </div>

                    <h3 className="font-semibold text-[35px]">{SlideText.sliders[currSlide].h}</h3>
                </div>
            </div>

            <div key={currSlide} className="row-span-2 md:h-[25rem] lg:h-[35rem] animate-[fadeIn_0.5s_ease-out]">
                <Image 
                    src={SlideText.sliders[currSlide].img}
                    alt={SlideText.sliders[currSlide].h}
                    width={600}
                    height={600}
                    className="ms-auto my-auto"
                />
            </div>

            <div className="ps-5 md:ps-15 lg:ps-50 flex items-start">
                <div className="flex gap-0">
                    {[0,1,2].map(n => (
                        <SectionThreeBtn
                            key={n}
                            numb={n}
                            currStory={currSlide}
                            setCurrStory={setCurrSlide}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}