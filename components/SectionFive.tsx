'use client';
//Components
import Image from "next/image";
import { useState } from "react";
import SectionThreeBtn from "./SectionThreeBtn";
//Icons
import { FaLaptop, FaMobileAlt } from "react-icons/fa";

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
            }
        ]
    };

    const Icon = SlideText.sliders[currSlide].ico;

    return(
        <div className="grid grid-cols-2 py-15 overflow-hidden">
            <div className="flex flex-col items-start justify-center ps-50">
                <div 
                    key={currSlide}
                    className="text-[#43687a] flex flex-col items-start animate-[fadeInUp_0.5s_ease-out] duration-500"
                >
                    <div className="text-[#fcfcfc] bg-[#43687a] rounded-full p-2">
                        <Icon size={25} />
                    </div>

                    <h3 className="font-semibold text-[35px]">{SlideText.sliders[currSlide].h}</h3>
                </div>
                <div className="flex gap-0">
                    {[0,1].map(n => (
                        <SectionThreeBtn
                            key={n}
                            numb={n}
                            currStory={currSlide}
                            setCurrStory={setCurrSlide}
                        />
                    ))}
                </div>
            </div>
            <div key={currSlide} className="h-[600px] animate-[fadeIn_0.5s_ease-out]">
                <Image 
                    src={SlideText.sliders[currSlide].img}
                    alt={SlideText.sliders[currSlide].h}
                    width={600}
                    height={600}
                    className="ms-auto"
                />
            </div>
        </div>
    );
}