//Components
import Link from "next/link";

interface LinksProps {
    text: string;
    href: string;
}

interface FooterSectionItemProps {
    links: LinksProps[];
}

export default function FooterSectionItem({ links }: FooterSectionItemProps) {
    return(
        <div className="flex flex-col items-center md:items-start gap-3">
            {links.map((link, index) => (
                <Link 
                    key={index} 
                    href={link.href}
                    className="text-[15px] lg:text-[20px] font-semibold duration-500
                                hover:text-[#45c14e]"
                >
                    {link.text}
                </Link>
            ))}
        </div>
    );
}