import { useState, useEffect, useMemo } from 'react'
import Splash from '../components/Splash'
import { connect } from 'react-redux'
import TableRows from '../components/TableRows'
import { fetchData } from '../store/actions/fdas'

const Home = ({ fdas, fetchData }) => {
    const [screen, setScreen] = useState(false)
    const [increase1, setIncrease1] = useState(false)
    const [increase2, setIncrease2] = useState(false)
    const [increase3, setIncrease3] = useState(false)
    const [increase4, setIncrease4] = useState(false)

    setTimeout(() => (
        setScreen(true)
    ), 1000)

    useEffect(() => {
        setInterval(() => {
            fetchData()
        }, 1000);
    }, [])

    useEffect(() => {

        if (fdas[0]?.data[0]?.node1?.temp > fdas[1]?.data[0]?.node1?.temp) {
            setIncrease1(true)
        } else {
            setIncrease1(false)
        }
        if (fdas[0]?.data[0]?.node2?.temp > fdas[1]?.data[0]?.node2?.temp) {
            setIncrease2(true)
        } else {
            setIncrease2(false)
        }

        if (fdas[0]?.data[1]?.node1?.temp > fdas[1]?.data[1]?.node1?.temp) {
            setIncrease3(true)
        } else {
            setIncrease3(false)
        }
        if (fdas[0]?.data[1]?.node2?.temp > fdas[1]?.data[1]?.node2?.temp) {
            setIncrease4(true)
        } else {
            setIncrease4(false)
        }

    }, [fdas])

    // console.log(fdas[0]?.data[1]?.node1?.temp);

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

    console.log();

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
                            <p className='text-2xl font-bold ' >Infrared Trigger</p>
                        </div>
                        <div className='border-2 border-black' >
                            {fdas[0]?.data?.map((base, index) => {
                                return <TableRows key={base?.name} data={base} increase1={index == 0 ? increase1 : increase3} increase2={index == 0 ? increase2 : increase4} />
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

export default connect(mapStateToProps, { fetchData })(Home)