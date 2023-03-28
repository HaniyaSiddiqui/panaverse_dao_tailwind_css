"use client";
import React, { useState } from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Button from '@/components/shared/Button';
import QuarterBox from '@/components/shared/QuarterBox';
import SpecializedData from '@/components/shared/Data';
import Image from 'next/image';



const SpecializedTracks = () => {
    const [selectedItem, setSelectedItem] = useState("web")
    const selectedItemData = SpecializedData.find((item) => item.slug === selectedItem)


    const header = 'Specialized Tracks:';

    return (
        <section className='mt-16 lg:mt-28' id="courses">
            <Wrapper>
                <div >
                    <h2 className="text-4xl font-bold whitespace-pre-line">
                        {header}
                    </h2>
                    <p className="mt-4 text-md text-slate-600 max-w-screen-sm">
                        After completing the first three quarters the participants will select one or more specializations consisting of two courses each:
                    </p>

                    {/* Content Left */}
                    <div className=' mt-10 flex flex-col-reverse lg:flex-row gap-x-4 gap-y-6'>
                        <div className='shadow-xl sticky top-0 self-start  basis-8/12 rounded-xl border border-slate-200 py-8 px-8'>
                            <h4 className='text-primary text-lg font-medium '>Specialized Program</h4>
                            <h3 className='text-2xl font-semibold mx-w-screen-sm'>{selectedItemData?.header}</h3>
                            <p className='text-md text-slate-600 mt-2 max-w-screen-sm'>{selectedItemData?.description}
                            </p>
                            <button className='text-primary text-xl mt-4 font-bold underline flex gap-x-2 items-end' >Learn More<svg className='mb-1.5' width="10" height="13" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" stroke-width="2" />
                            </svg>
                            </button>

                            <div className='flex flex-col md:flex-row gap-4 mt-8'>

                                {
                                    selectedItemData?.quarters.map((item) => (
                                        <QuarterBox
                                            key={item.number}
                                            header={item.header}
                                            description={item.description}
                                            number={item.number}
                                            haveBorder={false}
                                            isSelected={false}
                                        />


                                    ))
                                }



                            </div>
                        </div>

                        {/* Content Right */}
                        <div className='px-4  space-y-4 py-6 basis-4/12  flex-1'>
                            {
                                SpecializedData.map((item, i) => (
                                    <div onClick={() => setSelectedItem(item.slug)} key={i} className='flex gap-x-4 items-center cursor-pointer '>
                                        <div className='flex-shrink-0 h-20 w-36 relative'>
                                            {selectedItemData?.slug == item.slug ?
                                                <span className=" h-23 w-full absolute inset-0 object-cover bg-teal-400 -z-10"></span>
                                                : ''}
                                            <Image src={item.image} alt="ai" className={"h-20 object-cover rounded-lg hover:scale-105"} />


                                        </div>
                                        <div>
                                            <h4 className="text-primary font-semibold">Specialized Program</h4>
                                            <h3 className='text-sm font-semibold'>{item.header}</h3>
                                        </div>

                                        <hr />
                                    </div>

                                ))
                            }



                        </div>

                    </div>




                </div>
            </Wrapper>
        </section>

    )
}

export default SpecializedTracks