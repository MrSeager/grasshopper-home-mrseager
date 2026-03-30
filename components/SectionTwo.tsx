//Components
import SectionTwoItem from "./SectionTwoItem";

export default function SectionTwo() {
    return(
        <div className="py-15 px-5 flex flex-col gap-5 items-center bg-[#dff8eb] text-[#43687a]">
            <h2 className="text-center text-[30px] md:text-[40px] font-semibold">The best way to start your coding adventure.</h2>
            <div className="flex flex-col md:flex-row gap-5 md:gap-20 lg:w-[75%]">
                <SectionTwoItem 
                    img="/images/bg-img-1.png"
                    par="Learn with fun, quick lessons on your phone that teach you to write real JavaScript."
                />
                <SectionTwoItem 
                    img="/images/bg-img-2.png"
                    par="Learn with fun, quick lessons on your phone that teach you to write real JavaScript."
                />
                <SectionTwoItem 
                    img="/images/bg-img-3.png"
                    par="Learn with fun, quick lessons on your phone that teach you to write real JavaScript."
                />
            </div>
        </div>
    );
}