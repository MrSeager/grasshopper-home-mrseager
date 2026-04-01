//Components
import Image from "next/image";
//Icons
import { FaQuoteLeft } from "react-icons/fa";

interface SectionThreeItemProps {
    img: string;
    par: string;
    name: string;
    storyNum: number;
    currStory: number;
    setCurrStory: (currStory: number) => void;
}

export default function SectionThreeItem({ img, par, name, storyNum, currStory, setCurrStory }: SectionThreeItemProps) {
    const handleClick = (n: number) => {
        if (n === currStory) {
            setCurrStory(currStory === 4 ? 1 : currStory + 1);
        } else {
            setCurrStory(n);
        }
    };
    
    return(
        <div className="w-full flex-none flex justify-center">
            <div 
                className={`${currStory === storyNum ? 'opacity-100 scale-115' : 'opacity-50 scale-100'} cursor-pointer w-[300px] md:w-[450px] flex-none duration-500 py-5 px-3 flex gap-3 border border-2 border-[#eaeaea] bg-[#f8f8f8] shadow-md rounded rounded-lg`}
                onClick={() => handleClick(storyNum)}
            >
                <div>
                    <Image 
                        src={img}
                        alt="profile pic"
                        width={250}
                        height={250}
                        className="rounded-full"
                    />
                </div>
                <div className="flex flex-col gap-3 text-[#43687a]">
                    <h3 className="text-[#45c14e]"><FaQuoteLeft size={35} /></h3>
                    <p>{par}</p>
                    <h3 className="text-[20px] font-semibold">{name}</h3>
                </div>
            </div>
        </div>
    );
}