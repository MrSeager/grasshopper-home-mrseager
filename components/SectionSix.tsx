//Components
import SectionSixRunningLine from "./SectionSixRunningLine";

export default function SectionSix() {
    return(
        <div className="flex flex-col gap-5 items-center py-15">
            <h3 className="text-[#43687a] font-semibold text-center text-[35px] px-5">Learn concepts that apply to any programming language</h3>
            <div className="w-full overflow-x-hidden py-2 flex flex-col gap-5">
                <SectionSixRunningLine 
                    mainClass="animate-scroll-horizontal"
                    text={["Some text", "text", "more text", "and more text" ]}
                />
                <SectionSixRunningLine 
                    mainClass="animate-scroll-horizontal-reverse"
                    text={["Here", "can be", "your", "commercial" ]}
                />
                <SectionSixRunningLine 
                    mainClass="animate-scroll-horizontal"
                    subClass="ps-15"
                    text={["Or not", "probebly not", "because it's just", "a project for portfolio" ]}
                />
            </div>
        </div>
    )
}