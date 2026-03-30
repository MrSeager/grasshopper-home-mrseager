//Components
import Image from "next/image";

interface SectionTwoItemProps {
    img: string;
    par: string;
}

export default function SectionTwoItem({ img, par }: SectionTwoItemProps) {
    return(
        <div className="flex flex-col gap-3 items-center duration-500
                        hover:scale-105">
            <Image 
                src={img}
                alt="image"
                width={252}
                height={252}
            />
            <p className="text-center">{par}</p>
        </div>
    );
}