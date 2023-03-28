import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Image from "next/image"
import HeroPoster from "../../assets/images/VR_hero3.jpg"
// Components
import Button from "@/components/shared/Button";

const Hero = () => {
    return (
        <section className="mt-10 lg:mt-20">
            <Wrapper >
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Side */}
                    <div className="flex-1 ">
                        <h4 className="text-primary font-semibold text-md mt-4">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                        <h1 className="text-5xl sm:text-5xl font-bold max-w-700">Certified Web 3.0 and Metaverse Developer</h1>

                        <div className='max-w-screen-lg'>
                            <p className="mt-6 text-md text-slate-600">
                                A One and Quarter Years Panaverse DAO Earn as you Learn Program
                                Getting Ready for the Next Generation of the Internet
                            </p>
                            <p className="mt-2 text-md text-slate-600">
                                Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
                            </p>
                        </div>
                        <div className='mt-5 my-5'>
                            <Button text={"Enroll Now"} />
                        </div>
                    </div>

                    {/* Right Side */}
                    {/* Image here  */}
                    <div className="overflow-hidden  shadow-gray-400 rounded-xl flex-1">
                        <Image src={HeroPoster} alt="Hero Poster" className='hover:scale-105 hover:shadow-lg duration-300' />
                    </div>

                </div>
            </Wrapper>
        </section>
    )
}


export default Hero