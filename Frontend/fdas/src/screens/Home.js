import { useState, useEffect } from 'react'
import Splash from '../components/Splash'
import { connect } from 'react-redux'
import TableRows from '../components/TableRows'
import { fetchData } from '../store/actions/fdas'
import useTrend from '../hooks/useTrend'

const Home = ({ fdas, fetchData }) => {
    const [screen, setScreen] = useState(false)
    // const [increase1, setIncrease1] = useState(false)
    // const [increase2, setIncrease2] = useState(false)
    // const [increase3, setIncrease3] = useState(false)
    // const [increase4, setIncrease4] = useState(false)

    setTimeout(() => (
        setScreen(true)
    ), 2500)

    useEffect(() => {
        setInterval(() => {
            fetchData()
        }, 1000);
    }, [])
    
    
    const [tempIncrease1, tempIncrease2, tempIncrease3, tempIncrease4] =  useTrend(fdas, 'temp')
    const [humIncrease1, humIncrease2, humIncrease3, humIncrease4] =  useTrend(fdas, 'hum')
    const [coIncrease1, coIncrease2, coIncrease3, coIncrease4] =  useTrend(fdas, 'co')

    return (
        <>
            {screen ? (
                <div className="p-10 h-screen bg-gradient-to-b from-black from-60% via-[#000000e6] via-70% to-[#004651] to-90%" >
                    <p className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ff2f] from-0%  to-red-700 to-20% ' >FDAS</p>
                    <div className='relative mt-20 rounded-md p-5 py-16 pb-20' >
                        <div className='grid grid-cols-6 mb-2 text-center text-white' >
                            <p className='col-start-3 text-2xl font-bold ' >Temperature</p>
                            <p className='text-2xl font-bold ' >Humidity</p>
                            <p className='text-2xl font-bold ' >CO</p>
                            <p className='text-2xl font-bold ' >Infrared Trigger</p>
                        </div>
                        <div className='border-2 border-black' >
                            {fdas[0]?.data?.map((base, index) => {
                                return <TableRows 
                                key={base?.name} 
                                data={base} 
                                TempIncrease1={index == 0 ? tempIncrease1 : tempIncrease3} 
                                TempIncrease2={index == 0 ? tempIncrease2 : tempIncrease4} 
                                HumIncrease1={index == 0 ? humIncrease1 : humIncrease3} 
                                HumIncrease2={index == 0 ? humIncrease2 : humIncrease4} 
                                COIncrease1={index == 0 ? coIncrease1 : coIncrease3} 
                                COIncrease2={index == 0 ? coIncrease2 : coIncrease4} 
                                />
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