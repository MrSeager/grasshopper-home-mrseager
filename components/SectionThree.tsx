'use client';
//Components
import { useState } from "react";
import SectionThreeItem from "./SectionThreeItem";
import SectionThreeBtn from "./SectionThreeBtn";

export default function SectionThree() {
    const [currStory, setCurrStory] = useState<number>(1);

    return(
        <div className="bg-[#fcfcfc] py-5 w-full flex flex-col gap-3 items-center justify-center">
            <h2 className="text-[#43687a] font-semibold text-[40px]">Grasshopper stories</h2>
            <div className="overflow-hidden w-full py-15">
                <div
                    className="flex transition-transform duration-500 w-full md:w-[75%] lg:w-[40%] mx-auto"
                    style={{ transform: `translateX(-${(currStory - 1) * 100}%)` }}
                >
                    <SectionThreeItem 
                        img={'/images/profpic_1.jpg'}
                        par="Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
                        name="Anonym 1"
                        storyNum={1}
                        currStory={currStory}
                    />
                    <SectionThreeItem 
                        img={'/images/profpic_2.jpg'}
                        par="Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
                        name="Anonym 2"
                        storyNum={2}
                        currStory={currStory}
                    />
                    <SectionThreeItem 
                        img={'/images/profpic_3.jpg'}
                        par="Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
                        name="Anonym 3"
                        storyNum={3}
                        currStory={currStory}
                    />
                    <SectionThreeItem 
                        img={'/images/profpic_4.jpg'}
                        par="Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
                        name="Anonym 4"
                        storyNum={4}
                        currStory={currStory}
                    />
                </div>
            </div>
            <div className="flex gap-1">
                {[1,2,3,4].map(n => (
                    <SectionThreeBtn
                        key={n}
                        numb={n}
                        currStory={currStory}
                        setCurrStory={setCurrStory}
                    />
                ))}
            </div>
        </div>
    );
}