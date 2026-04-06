//Components
import FooterSectionItem from "./FooterSectionItem";

export default function FooterSection() {
    return(
        <footer className="px-5 lg:px-50 py-15 grid w-full max-w-[120rem] grid-cols-1 gap-3 md:grid-cols-3 bg-[#00324b]">
            <FooterSectionItem 
                links={[
                    { text: "Home", href: "/" },
                    { text: "What is codding", href: "/" },
                    { text: "About", href: "/" }
                ]}
            />
            <FooterSectionItem 
                links={[
                    { text: "Email us", href: "/" },
                    { text: "FAQ", href: "/" }
                ]}
            />
            <FooterSectionItem 
                links={[
                    { text: "Terms of service", href: "/" },
                    { text: "Privacy policy", href: "/" }
                ]}
            />
        </footer>
    );
}