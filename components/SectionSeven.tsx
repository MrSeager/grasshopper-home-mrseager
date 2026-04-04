//Components
import Image from "next/image";

export default function SectionSeven() {
    return(
        <div className="bg-[#4ee8e2] flex px-50 pt-20">
            <div className="pb-15 flex flex-col items-start justify-center gap-10">
                <h3 className="text-base/10 text-[35px] font-semibold text-[#43687a]">Get started on your adventure in coding with Grasshopper.</h3>
                <div className="flex gap-3">
                    <button 
                        type="button"
                        className="cursor-pointer bg-[#45c14e] font-semibold text-[#fcfcfc] border-2 border-[#45c14e] rounded rounded-full px-10 py-2 text-[15px] duration-500
                                    hover:scale-105"
                    >
                        Get Started
                    </button>
                    <button 
                        type="button"
                        title="google play"
                        className="cursor-pointer duration-500
                                    hover:scale-105"
                    >
                        <Image 
                            src={'/images/get-it-on-google-play-badge-png-google-play-badge-571.png'}
                            alt="google play"
                            width={150}
                            height={50}
                        />
                    </button>
                    <button 
                        type="button"
                        title="app store"
                        className="cursor-pointer duration-500
                                    hover:scale-105"
                    >
                        <Image 
                            src={'/images/App-Store-Symbol-700x394.png'}
                            alt="app store"
                            width={150}
                            height={50}
                        />
                    </button>
                </div>
            </div>
            <div className="flex justify-end">
                <Image 
                    src={'/images/bg-two.png'}
                    alt="bg img"
                    width={324}
                    height={349}
                />
            </div>
        </div>
    );
}