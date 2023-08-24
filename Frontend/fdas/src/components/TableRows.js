import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion'

const TableRows = ({ data }) => {
    // const [number, setNumber] = useState(0)
    const [trigger1, setTrigger1] = useState(data?.node1?.trigger)
    const [trigger2, setTrigger2] = useState(data?.node2?.trigger)

    useEffect(() => {
        setTrigger1(data?.node1?.trigger)
        setTrigger2(data?.node2?.trigger)
    }, [data?.node1?.trigger, data?.node2?.trigger])



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

    const mainControls1 = useAnimation();
    const mainControls2 = useAnimation();

    useEffect(() => {
        if (trigger1) {
            mainControls1.start("visible")
        } else {
            mainControls1.start({
                scale: 1,
                borderRadius: 0,
                transition: { repeat: 0, duration: 5 }
            })
        }
        if (trigger2) {
            mainControls2.start("visible")
        } else {
            mainControls2.start({
                scale: 1,
                borderRadius: 0,
                transition: { repeat: 0, duration: 5 }
            })
        }
    }, [trigger1, trigger2])

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
                {data?.node1?.humidity}
            </div>
            <div className='bg-[#2ed1ff] p-5 border-2 border-black' >
                {data?.node1?.co}
            </div>
            <motion.div
                variants={{
                    hidden: { scale: 1 },
                    visible: { scale: [1, 1.05, 1], borderRadius: [0, 10, 0] }
                }}
                initial="hidden"
                animate={mainControls1}
                transition={{ repeat: Infinity, duration: 1.8, delay: 0.5 }}
                className={`${data?.node1?.trigger ? 'bg-red-500 font-semibold' : 'bg-[#2ed1ff]'} p-5 border-2 border-black`}
            >
                {data?.node1?.trigger ? "True" : "False"}
            </motion.div>
            <div className='bg-[#2ed1ff] font-semibold p-5 border-2 border-black' >
                Node 2
            </div>
            <div className='bg-[#2ed1ff] p-5 border-2 border-black' >
                {data?.node2?.temp}
            </div>
            <div className='bg-[#2ed1ff] p-5 border-2 border-black' >
                {data?.node2?.humidity}
            </div>
            <div className='bg-[#2ed1ff] p-5 border-2 border-black' >
                {data?.node2?.co}
            </div>
            <motion.div
                variants={{
                    hidden: { scale: 1 },
                    visible: { scale: [1, 1.05, 1], borderRadius: [0, 10, 0] }
                }}
                initial="hidden"
                animate={mainControls2}
                transition={{ repeat: Infinity, duration: 1.8, delay: 0.5 }}
                className={`${data?.node2?.trigger ? 'bg-red-500 font-semibold' : 'bg-[#2ed1ff]'} p-5 border-2 border-black`}
            >
                {data?.node2?.trigger ? "True" : "False"}
            </motion.div>
        </div>
    )
}

export default TableRows