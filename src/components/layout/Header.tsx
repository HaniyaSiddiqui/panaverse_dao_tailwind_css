
import React from 'react'

import Logo from "/public/logo.png"
import Image from "next/image"
import Link from 'next/link'
import Wrapper from '@/components/shared/Wrapper'



const Header = () => {

    return (
        <header className=" h-auto z-20 sticky inset-0 backdrop-blur-md py-3 bg-white bg-opacity-90 ">

            <Wrapper>
                <div className="max-w-screen-2.5xl mx-auto px-4 w-full flex justify-between css-0">

                    {/* Logo */}
                    <div>
                        <Image height={60} src={Logo} alt="Panaverse Dao" />
                    </div>
                    {/* Navigation Bar */}
                    <ul className="flex h-full items-center duration-300 gap-x-4 sm:gap-x-8 text-16">
                        <li className='hover:text-primary duration-300 '><Link href={"/"}>Home</Link></li>
                        <li className='hover:text-primary duration-300 '><Link href="#courses" >Courses</Link></li>
                    </ul>
                </div>

            </Wrapper>
        </header>

    )
}



export default Header