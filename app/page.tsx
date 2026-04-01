//Components
import HeaderNav from "@/components/HeaderNav";
import MainSection from "@/components/MainSection";

export default function Home() {
  return (
    <div className="select-none flex flex-col flex-1 items-center justify-start text-[#b8c6ce] font-sans bg-[#fcfcfc]">
      <HeaderNav />
      <MainSection />
    </div>
  );
}

// #fcfcfc #b8c6ce #43687a #dff8eb #45c14e #eaeaea #f8f8f8 #4ee8e2