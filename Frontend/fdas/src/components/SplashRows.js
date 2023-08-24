import { useEffect, useRef, useState } from 'react'

const SplashRows = () => {
    const [number, setNumber] = useState(0)


    useEffect(() => {
        const counter = setInterval(() => {
            setNumber(number + 1)
        }, 10)
        if (number === 99) {
            clearInterval(counter)
        }
        return () => {
            clearInterval(counter)
        }
    })

    return (
        <div className='grid grid-cols-6 text-center w-full' >
            <div className='bg-[#2ed1ff] font-bold p-5 border-2 border-black row-span-2 flex justify-center items-center ' >
                Base
            </div>
            <div className='bg-[#2ed1ff] font-semibold p-5 border-2 border-black' >
                Node 1
            </div>
            <div className='bg-[#2ed1ff] p-5 border-2 border-black' >
                {number}
            </div>
            <div className='bg-[#2ed1ff] p-5 border-2 border-black' >
                {number}
            </div>
            <div className='bg-[#2ed1ff] p-5 border-2 border-black' >
                {number}
            </div>
            <div className='bg-[#2ed1ff] p-5 border-2 border-black' >
                Yes
            </div>
            <div className='bg-[#2ed1ff] font-semibold p-5 border-2 border-black' >
                Node 2
            </div>
            <div className='bg-[#2ed1ff] p-5 border-2 border-black' >
                {number}
            </div>
            <div className='bg-[#2ed1ff] p-5 border-2 border-black' >
                {number}
            </div>
            <div className='bg-[#2ed1ff] p-5 border-2 border-black' >
                {number}
            </div>
            <div className='bg-[#2ed1ff] p-5 border-2 border-black' >
                No
            </div>
        </div>
    )
}

export default SplashRows