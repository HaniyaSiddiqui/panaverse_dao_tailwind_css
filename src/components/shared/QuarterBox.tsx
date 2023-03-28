import React, { FC } from 'react'

interface IProps {
    header: string;
    description: string;
    number: number;
    haveBorder?: boolean;
    isSelected?: boolean;
}
const QuarterBox: FC<IProps> = ({ header, description, number, haveBorder = true, isSelected = false }) => {
    return (
        <div className={` rounded-md flex-1  relative flex flex-col justify-center px-8 py-12 z-0 ${haveBorder === true ? "border" : ''}`}>
            <h4 className={`font-bold text-lg ${isSelected === true ? 'underline' : ''}`}>{header}</h4>
            <p className="mt-2 text-slate-600 z-10">{description}</p>
            <div className="absolute text-gray-100 -top-8  right-10 text-[170px] font-bold -z-10">{number}</div>
        </div>
    )
}

export default QuarterBox