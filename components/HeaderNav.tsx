'use client';
//Components
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
//Icons
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

export default function HeaderNav() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return(
        <header className="max-w-[120rem] w-full">
            <nav className="relative w-full py-5 px-5 lg:px-10 flex items-center gap-10">
                <Image 
                    src={'/images/logo.png'}
                    alt="logo"
                    width={162}
                    height={27}
                    loading="eager"
                />
                <div className={`absolute bg-[#fcfcfc] duration-500 w-full right-0 px-3 gap-3 overflow-hidden flex flex-col top-15 
                                ${isOpen ? 'py-3 max-h-screen' : 'py-0 max-h-0'} 
                                lg:gap-10 lg:px-10 lg:bg-transparent lg:max-h-screen lg:top-0 lg:flex-row lg:relative`}>
                    <Link 
                        href={'/'}
                        className="font-semibold duration-500
                                    hover:text-[#43687a]"
                    >
                        What is Coding
                    </Link>
                    <Link 
                        href={'/'}
                        className="font-semibold duration-500
                                    hover:text-[#43687a]"
                    >
                        Curriculum
                    </Link>
                    <Link 
                        href={'/'}
                        className="font-semibold duration-500
                                    hover:text-[#43687a]"
                    >
                        Glossary
                    </Link>
                    <Link 
                        href={'/'}
                        className="font-semibold duration-500
                                    hover:text-[#43687a]"
                    >
                        About Us
                    </Link>
                    <Link 
                        href={'/'}
                        className="font-semibold duration-500
                                    hover:text-[#43687a]"
                    >
                        FAQ
                    </Link>
                    <Link 
                        href={'/'}
                        className="font-semibold duration-500 lg:ms-auto
                                hover:text-[#43687a]"
                    >
                        Sign In
                    </Link>
                </div>
                <button 
                    type="button" 
                    className="ms-auto lg:hidden active:rotate-180 duration-500"
                    title="menu"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <IoCloseSharp size={25} /> : <IoMdMenu size={25} />}
                </button>
            </nav>
        </header>
    );
}