import { motion } from 'framer-motion'

const Splash = () => {

    return (
        <motion.div
            animate={{ opacity: [0.8, 1, 1], scale: [0.9, 1, 1, 1], borderRadius: [100, 0, 0], backgroundColor: '#004651' }}
            transition={{ duration: 3, delay: 0.2 }}
            className="p-10 h-screen flex justify-center items-center text-center flex-col"
        >
            <div className='flex text-[15rem] font-bold space-x-2' >
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 200 },
                        visible: { opacity: 1, y: [0, 20, 0] }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600'
                >
                    F.
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 200 },
                        visible: { opacity: 1, y: [0, 20, 0] }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600'
                >
                    D.
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 200 },
                        visible: { opacity: 1, y: [0, 20, 0] }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600'
                >
                    A.
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 200 },
                        visible: { opacity: 1, y: [0, 20, 0] }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600'
                >
                    S.
                </motion.div>
            </div>
            <motion.div
                animate={{ opacity: [0.5, 1], scale: [0,1,0.95,1] }}
                transition={{ duration: 2, delay: 0.9 }}
                className='mt-32 text-5xl font-bold text-[#69cf66] font-mono'
            >
                TEAM OMEN
            </motion.div>
        </motion.div >
    )
}

export default Splash