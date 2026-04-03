interface SectionSixItemProps {
    text: string;
}

export default function SectionSixItem({ text }: SectionSixItemProps) {
    return(
        <div className="bg-[#dff8eb] px-10 py-2 rounded-full duration-500
                        hover:scale-110">
            <p className="text-[#43687a] font-semibold text-center text-[20px]">
                {text}
            </p>
        </div>
    );
}