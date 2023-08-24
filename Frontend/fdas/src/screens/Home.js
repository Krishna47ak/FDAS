import { useState } from 'react'
import Splash from '../components/Splash'
import { connect } from 'react-redux'
import TableRows from '../components/TableRows'

const Home = ({ fdas }) => {
    const [screen, setScreen] = useState(false)
    const [temp, setTemp] = useState(0)
    const [humidity, setHumidity] = useState(0)
    const [co, setCO] = useState(0)
    const [triggers, setTriggers] = useState(false)

    setTimeout(() => (
        setScreen(true)
    ), 2500)

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     createFdas(temp, humidity, co, triggers)
    // };

    // const data = [
    //     [
    //         {
    //             name: 'Base 1',
    //             node1: {
    //                 temp: 22,
    //                 hum: 23,
    //                 co: 12,
    //                 trigger: true
    //             },
    //             node2: {
    //                 temp: 11,
    //                 hum: 23,
    //                 co: 12,
    //                 trigger: false
    //             },
    //         },
    //         {
    //             name: 'Base 2',
    //             node1: {
    //                 temp: 33,
    //                 hum: 23,
    //                 co: 12,
    //                 trigger: false
    //             },
    //             node2: {
    //                 temp: 44,
    //                 hum: 23,
    //                 co: 12,
    //                 trigger: true
    //             },
    //         }
    //     ]
    // ]

    // console.log(data[0]);

    return (
        <>
            {screen ? (
                <div className="p-10 h-screen bg-[#004651]" >
                    <p className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ff2f] from-0%  to-red-700 to-20% ' >FDAS</p>
                    <div className='relative mt-20 bg-[#4ca0ac] rounded-xl border-4 border-black p-5 py-16 pb-20' >
                        <div className='grid grid-cols-6 mb-2 text-center' >
                            <p className='col-start-3 text-2xl font-bold ' >Temperature</p>
                            <p className='text-2xl font-bold ' >Humidity</p>
                            <p className='text-2xl font-bold ' >CO</p>
                            <p className='text-2xl font-bold ' >Triggers</p>
                        </div>
                        <div className='border-2 border-black' >
                            {fdas[0]?.data?.map((base) => {
                                return <TableRows key={base?.name} data={base} />
                            })}
                        </div>
                        <div className='absolute -bottom-12 right-6 text-white font-bold text-2xl' >
                            Team Omen
                        </div>
                    </div>
                </div>
            ) : (
                <div className='bg-green-500' >
                    <Splash />
                </div>
            )}
        </>
    )
}

const mapStateToProps = state => ({
    fdas: state.fdas.fdas
})

export default connect(mapStateToProps)(Home)