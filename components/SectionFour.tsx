//Components
import Image from "next/image";
//Icons
import { IoLogoAndroid, IoLogoApple } from "react-icons/io";

export default function SectionFour() {
    return(
        <div className="md:grid grid-cols-4 bg-[#4ee8e2] py-15 px-5 lg:px-25 items-center">
            <div className="hidden md:flex justify-center duration-500
                            hover:scale-105">
                <Image 
                    src={'/images/bg-img-4.png'}
                    alt="img_1"
                    width={186}
                    height={283}
                />
            </div>
            <div className="col-span-2 flex flex-col items-center justify-center gap-3">
                <h3 className="text-[#43687a] font-semibold text-center text-[35px] duration-500
                            hover:scale-105">Learn to code anywhere.</h3>
                <p className="text-[#43687a] text-center duration-500
                            hover:scale-105">Grasshopper is available on iOS, Android, and all web browsers. Your progress syncs seamlessly between devices.</p>
                <div className="text-[#43687a] flex justify-center gap-2">
                    <IoLogoAndroid size={35} className="duration-500 hover:scale-115" />
                    <IoLogoApple size={35} className="duration-500 hover:scale-115" />
                </div>
            </div>
            <div className="hidden md:flex justify-center duration-500
                            hover:scale-105">
                <Image 
                    src={'/images/bg-img-5.png'}
                    alt="img_1"
                    width={225}
                    height={168}
                />
            </div>
        </div>
    );
}