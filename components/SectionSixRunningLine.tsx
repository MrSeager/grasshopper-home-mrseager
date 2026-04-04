//Components
import SectionSixItem from "./SectionSixItem";

interface SectionSixRunningLineProps {
    mainClass: string;
    subClass?: string;
    text: string[];
}

export default function SectionSixRunningLine({ mainClass, subClass, text }: SectionSixRunningLineProps) {
    return(
        <div className={`flex whitespace-nowrap w-[200%] ${mainClass}`}>
            <div className={`${subClass} flex gap-3 w-[50%]`}>
                {text.map((t, i) => (
                    <SectionSixItem key={i} text={t} />
                ))}
            </div>
            <div className={`${subClass} flex gap-3 w-[50%]`}>
                {text.map((t, i) => (
                    <SectionSixItem key={i} text={t} />
                ))}
            </div>
        </div>
    );
}