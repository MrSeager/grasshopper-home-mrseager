export default function SectionOne() {
    return(
        <div className="w-full pt-10 md:pt-25 pb-60 md:pb-120 lg:pb-200 px-5 lg:px-25 flex flex-col gap-5 items-center lg:items-start
                        bg-[url(/images/bg-one.png)] bg-bottom bg-no-repeat bg-contain">
          <h1 className="text-center lg:text-start text-[35px] md:text-[50px] font-semibold text-[#43687a] text-base/10 md:text-base/20">Welcome to Grasshopper,<br /> the coding app for beginners</h1>
          <p className="text-center lg:text-start text-[#43687a] text-[20px] text-base/5">Learning to code opens new doors</p>
          <button 
            type="button"
            className="cursor-pointer bg-[#45c14e] text-[#fcfcfc] border-2 border-[#45c14e] rounded rounded-full px-10 py-3 text-[15px] duration-500
                        hover:bg-transparent hover:text-[#45c14e]"
          >
            Start coding today
          </button>
        </div>
    );
}