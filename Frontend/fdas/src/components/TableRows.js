import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion'
import { BiUpArrowAlt, BiDownArrowAlt } from 'react-icons/bi'

const TableRows = ({ data, TempIncrease1, TempIncrease2, HumIncrease1, HumIncrease2, COIncrease1, COIncrease2 }) => {
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
        <div className='grid grid-cols-6 text-center w-full text-white' >
            <div className='bg-black font-bold p-5  text-xl border border-white row-span-2 flex justify-center items-center ' >
                {data?.name.toUpperCase()}
            </div>
            <div className='bg-black font-semibold p-5 border border-white' >
                Node 1
            </div>
            <div className='bg-black flex justify-center items-center space-x-4 p-5 border border-white' >
                <p className='pl-10 w-20' >{data?.node1?.temp}</p>
                {TempIncrease1 ? <BiUpArrowAlt className='font-bold text-xl text-red-700 bg-black bg-opacity-30 rounded-2xl' /> : <BiDownArrowAlt className='font-bold text-xl text-[#00ff2f] bg-black bg-opacity-20 rounded-2xl' />}
            </div>
            <div className='bg-black flex justify-center items-center space-x-4 p-5 border border-white' >
                <p className='pl-10 w-20' >{data?.node1?.humidity}</p>
                {HumIncrease1 ? <BiUpArrowAlt className='font-bold text-xl text-[#00ff2f] bg-black bg-opacity-30 rounded-2xl' /> : <BiDownArrowAlt className='font-bold text-xl text-red-700 bg-black bg-opacity-20 rounded-2xl' />}
            </div>
            <div className='bg-black flex justify-center items-center space-x-4 p-5 border border-white' >
                <p className='pl-10 w-20' >{data?.node1?.co}</p>
                {COIncrease1 ? <BiUpArrowAlt className='font-bold text-xl text-red-700 bg-black bg-opacity-30 rounded-2xl' /> : <BiDownArrowAlt className='font-bold text-xl text-[#00ff2f] bg-black bg-opacity-20 rounded-2xl' />}
            </div>
            <motion.div
                variants={{
                    hidden: { scale: 1 },
                    visible: { scale: [1, 1.05, 1], borderRadius: [0, 10, 0] }
                }}
                initial="hidden"
                animate={mainControls1}
                transition={{ repeat: Infinity, duration: 1.8, delay: 0.5 }}
                className={`${data?.node1?.trigger ? 'bg-red-500 font-semibold' : 'bg-black'} p-5 border border-white`}
            >
                {data?.node1?.trigger ? "True" : "False"}
            </motion.div>
            <div className='bg-black font-semibold p-5 border border-white' >
                Node 2
            </div>
            <div className='bg-black flex justify-center items-center space-x-4 p-5 border border-white' >
                <p className='pl-10 w-20' >{data?.node2?.temp}</p>
                {TempIncrease2 ? <BiUpArrowAlt className='font-bold text-xl text-red-700 bg-black bg-opacity-30 rounded-2xl' /> : <BiDownArrowAlt className='font-bold text-xl text-[#00ff2f] bg-black bg-opacity-20 rounded-2xl' />}
            </div>
            <div className='bg-black flex justify-center items-center space-x-4 p-5 border border-white' >
                <p className='pl-10 w-20' >{data?.node2?.humidity}</p>
                {HumIncrease2 ? <BiUpArrowAlt className='font-bold text-xl text-[#00ff2f] bg-black bg-opacity-30 rounded-2xl' /> : <BiDownArrowAlt className='font-bold text-xl text-red-700 bg-black bg-opacity-20 rounded-2xl' />}
            </div>
            <div className='bg-black flex justify-center items-center space-x-4 p-5 border border-white' >
                <p className='pl-10 w-20' >{data?.node2?.co}</p>
                {COIncrease2 ? <BiUpArrowAlt className='font-bold text-xl text-red-700 bg-black bg-opacity-30 rounded-2xl' /> : <BiDownArrowAlt className='font-bold text-xl text-[#00ff2f] bg-black bg-opacity-20 rounded-2xl' />}
            </div>
            <motion.div
                variants={{
                    hidden: { scale: 1 },
                    visible: { scale: [1, 1.05, 1], borderRadius: [0, 10, 0] }
                }}
                initial="hidden"
                animate={mainControls2}
                transition={{ repeat: Infinity, duration: 1.8, delay: 0.5 }}
                className={`${data?.node2?.trigger ? 'bg-red-500 font-semibold' : 'bg-black'} p-5 border border-white`}
            >
                {data?.node2?.trigger ? "True" : "False"}
            </motion.div>
        </div>
    )
}

export default TableRows