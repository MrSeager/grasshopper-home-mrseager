//Icons
import { GoDotFill } from "react-icons/go";

interface SectionThreeBtnProps {
    numb: number;
    currStory: number;
    setCurrStory: (currStory: number) => void;
}

export default function SectionThreeBtn({ numb, currStory, setCurrStory }: SectionThreeBtnProps) {
    return (
        <button
            type="button"
            title={numb.toString()}
            className={`duration-500 cursor-pointer ${currStory === numb ? 'text-[#43687a]' : 'text-[#b8c6ce]'}`}
            onClick={() => setCurrStory(numb)}
        >
            <GoDotFill size={25} />
        </button>
    )
}