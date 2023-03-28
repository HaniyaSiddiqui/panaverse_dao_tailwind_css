import React from 'react'
import Wrapper from '@/components/shared/Wrapper'



const Footer = () => {
    return (
        <footer className="mt-20 w-full z-10 bg-white bottom-0 border-b-2">

            <Wrapper>
                <div className="flex justify-center py-4  items-center">


                    {/* Navigation Bar */}
                    <p className='font-semibold text-sm'>Designed By @Hanniya Aijaz </p>
                </div>

            </Wrapper>
        </footer>
    )
}

export default Footer