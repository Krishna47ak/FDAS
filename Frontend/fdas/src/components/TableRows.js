import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'

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

    const mainControls1 = useAnimation();
    const mainControls2 = useAnimation();

    useEffect(() => {
        if (data?.node1?.trigger) {
            mainControls1.start("visible")
        }
        if (data?.node2?.trigger) {
            mainControls2.start("visible")
        }
    }, [data?.node1?.trigger, data?.node2?.trigger])

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
                    visible: { scale: [1, 1.1, 1], borderRadius: [0,10,0] }
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
                    visible: { scale: [1, 1.1, 1], borderRadius: [0,10,0] }
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