import React, { useState } from 'react'

interface Props {
    heading?: string;
    paragraph?: string;
}


const Collpase = ({ heading, paragraph }: Props) => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <div className=''>
            <div className='flex justify-between items-center p-3'>
                <h1 className='text-lg font-bold'>{heading}</h1>
                <span onClick={() => setShow((show) => !show)} className='text-3xl select-none cursor-pointer font-bold'>{show ? '-' : '+'}</span>
            </div>
            {
                show &&
                <p className='p-3'>{paragraph}</p>

            }
        </div>
    )
}

export default Collpase