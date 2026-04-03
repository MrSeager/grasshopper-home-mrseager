//Components
import SectionSixItem from "./SectionSixItem"

export default function SectionSix() {
    return(
        <div className="flex flex-col gap-3 items-center py-15">
            <h3 className="text-[#43687a] font-semibold text-center text-[35px]">Learn concepts that apply to any programming language</h3>
            <div className="w-full overflow-x-hidden py-2">
                <div className="flex whitespace-nowrap w-[200%] animate-scroll-horizontal">
                    <div className="flex gap-3 w-[50%]">
                        <SectionSixItem text="Some text" />
                        <SectionSixItem text="text" />
                        <SectionSixItem text="more text" />
                        <SectionSixItem text="and more text" />
                    </div>
                    <div className="flex gap-3 w-[50%]">
                        <SectionSixItem text="Some text" />
                        <SectionSixItem text="text" />
                        <SectionSixItem text="more text" />
                        <SectionSixItem text="and more text" />
                    </div>
                </div>
            </div>
            <div className="w-full overflow-x-hidden py-2">
                <div className="flex whitespace-nowrap w-[200%] animate-scroll-horizontal-reverse">
                    <div className="flex gap-3 w-[50%]">
                        <SectionSixItem text="Here" />
                        <SectionSixItem text="can be" />
                        <SectionSixItem text="your" />
                        <SectionSixItem text="commercial" />
                    </div>
                    <div className="flex gap-3 w-[50%]">
                        <SectionSixItem text="Here" />
                        <SectionSixItem text="can be" />
                        <SectionSixItem text="your" />
                        <SectionSixItem text="commercial" />
                    </div>
                </div>
            </div>
            <div className="w-full overflow-x-hidden py-2">
                <div className="flex whitespace-nowrap w-[200%] animate-scroll-horizontal">
                    <div className="ps-15 flex gap-3 w-[50%]">
                        <SectionSixItem text="Or not" />
                        <SectionSixItem text="probebly not" />
                        <SectionSixItem text="because its just" />
                        <SectionSixItem text="a project for portfolio" />
                    </div>
                    <div className="ps-15 flex gap-3 w-[50%]">
                        <SectionSixItem text="Or not" />
                        <SectionSixItem text="probebly not" />
                        <SectionSixItem text="because it's just" />
                        <SectionSixItem text="a project for portfolio" />
                    </div>
                </div>
            </div>
        </div>
    )
}