import { useState } from 'react'
import Splash from '../components/Splash'
import { createFdas } from '../store/actions/fdas'
import { connect } from 'react-redux'
import SplashRows from '../components/SplashRows'
import { motion } from 'framer-motion'

const Home = ({ createFdas }) => {
    const [screen, setScreen] = useState(false)
    const [temp, setTemp] = useState(0)
    const [humidity, setHumidity] = useState(0)
    const [co, setCO] = useState(0)
    const [triggers, setTriggers] = useState(false)

    setTimeout(() => (
        setScreen(true)
    ), 2500)

    const onSubmit = (e) => {
        e.preventDefault();
        createFdas(temp, humidity, co, triggers)
    };

    return (
        <>
            {screen ? (
                <div className="p-10 h-screen bg-[#004651]" >
                    <p className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ff2f] from-0%  to-red-700 to-20% ' >FDAS</p>
                    <div className='mt-20 bg-[#4ca0ac] rounded-xl border-4 border-black p-5 py-16 pb-20' >
                        <div className='grid grid-cols-6 mb-2 text-center' >
                            <p className='col-start-3 text-2xl font-bold ' >Temperature</p>
                            <p className='text-2xl font-bold ' >Humidity</p>
                            <p className='text-2xl font-bold ' >CO</p>
                            <p className='text-2xl font-bold ' >Triggers</p>
                        </div>
                        <div className='border-2 border-black' >
                            <SplashRows />
                            <SplashRows />
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
    loading: state.fdas.loading
})

export default connect(mapStateToProps, { createFdas })(Home)