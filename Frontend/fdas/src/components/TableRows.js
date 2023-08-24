import { useEffect, useRef, useState } from 'react'

const TableRows = ({ data }) => {
    // const [number, setNumber] = useState(0)


    // useEffect(() => {
    //     const counter = setInterval(() => {
    //         setNumber(number + 1)
    //     }, 10)
    //     if (number === 99) {
    //         clearInterval(counter)
    //     }
    //     return () => {
    //         clearInterval(counter)
    //     }
    // })

    return (
        <div className='grid grid-cols-6 text-center w-full' >
            <div className='bg-[#2ed1ff] font-bold p-5 border-2 border-black row-span-2 flex justify-center items-center ' >
                {data?.name}
            </div>
            <div className='bg-[#2ed1ff] font-semibold p-5 border-2 border-black' >
                Node 1
            </div>
            <div className='bg-[#2ed1ff] p-5 border-2 border-black' >
                {data?.node1?.temp}
            </div>
            <div className='bg-[#2ed1ff] p-5 border-2 border-black' >
                {data?.node1?.hum}
            </div>
            <div className='bg-[#2ed1ff] p-5 border-2 border-black' >
                {data?.node1?.co}
            </div>
            <div className={`${ data?.node1?.trigger ? 'bg-red-500' : 'bg-[#2ed1ff]'} p-5 border-2 border-black`} >
                {data?.node1?.trigger ? "True" : "False"}
            </div>
            <div className='bg-[#2ed1ff] font-semibold p-5 border-2 border-black' >
                Node 2
            </div>
            <div className='bg-[#2ed1ff] p-5 border-2 border-black' >
                {data?.node2?.temp}
            </div>
            <div className='bg-[#2ed1ff] p-5 border-2 border-black' >
                {data?.node2?.hum}
            </div>
            <div className='bg-[#2ed1ff] p-5 border-2 border-black' >
                {data?.node2?.co}
            </div>
            <div className={`${ data?.node2?.trigger ? 'bg-red-500' : 'bg-[#2ed1ff]'} p-5 border-2 border-black`} >
            {data?.node2?.trigger ? "True" : "False"}
            </div>
        </div>
    )
}

export default TableRows