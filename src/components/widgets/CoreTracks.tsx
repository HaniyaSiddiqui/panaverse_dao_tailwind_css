import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Button from '@/components/shared/Button'
import QuarterBox from '../shared/QuarterBox';

const CoreTrackData = [
    {
        header: "Quarter I",
        description: "CS-101: Object-Oriented Programming using TypeScript",
        number: 1
    },
    {
        header: "Quarter II",
        description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 2
    },
    {
        header: "Quarter III",
        description: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
        number: 3
    },

];


const CoreTracks = () => {
    const header = 'Core Courses \n (Common in All Specializations):';
    return (
        <section className='mt-16 lg:mt-28 relative'>
            <Wrapper>
                <div className='max-w-screen-sm'>
                    <div className="absolute left-0 w-[315px] h-[315px] bg-secondary rounded-full shadow-xl blur-[250px]"></div>

                    <h4 className="text-primary font-semibold text-lg mt-4">Program of Studies</h4>

                    <h2 className="text-4xl font-bold whitespace-pre-line">
                        {header}
                    </h2>
                    <p className="mt-4 text-md text-slate-600">Every participant of the program will start by completing the following three core courses:</p>
                    <div className='mt-5 my-5'>
                        <Button text="Learn More" />
                    </div>
                </div>

                {/* Boxes */}
                <div className='my-20 flex flex-col md:flex-row  gap-x-8 gap-y-6'>
                    {
                        CoreTrackData.map((item, i) => (
                            <QuarterBox
                                key={item.number}
                                header={item.header}
                                description={item.description}
                                number={i + 1} />
                        )
                        )
                    }
                </div>

            </Wrapper>
        </section>
    )
}

export default CoreTracks