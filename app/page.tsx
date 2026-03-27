//Components
import HeaderNav from "@/components/HeaderNav";
import MainSection from "@/components/MainSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-start text-[#b8c6ce] font-sans bg-[#fcfcfc]">
      <HeaderNav />
      <MainSection />
    </div>
  );
}

// #fcfcfc #b8c6ce #43687a