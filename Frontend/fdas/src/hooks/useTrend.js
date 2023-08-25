import { useState, useEffect } from 'react'

export default (fdas, indicator) => {
    const [increase1, setIncrease1] = useState(false)
    const [increase2, setIncrease2] = useState(false)
    const [increase3, setIncrease3] = useState(false)
    const [increase4, setIncrease4] = useState(false)

    // const [check12, setCheck1] = useState()
    // const [check22, setCheck2] = useState()
    // const [check33, setCheck3] = useState()
    // const [check44, setCheck4] = useState()

    let check1, check2, check3, check4;

    if (indicator == 'temp') {
        check1 = fdas[0]?.data[0]?.node1?.temp > fdas[1]?.data[0]?.node1?.temp
        check2 = fdas[0]?.data[0]?.node2?.temp > fdas[1]?.data[0]?.node2?.temp
        check3 = fdas[0]?.data[1]?.node1?.temp > fdas[1]?.data[1]?.node1?.temp
        check4 = fdas[0]?.data[1]?.node2?.temp > fdas[1]?.data[1]?.node2?.temp
    }
    else if (indicator == 'hum') {
        check1 = fdas[0]?.data[0]?.node1?.humidity > fdas[1]?.data[0]?.node1?.humidity
        check2 = fdas[0]?.data[0]?.node2?.humidity > fdas[1]?.data[0]?.node2?.humidity
        check3 = fdas[0]?.data[1]?.node1?.humidity > fdas[1]?.data[1]?.node1?.humidity
        check4 = fdas[0]?.data[1]?.node2?.humidity > fdas[1]?.data[1]?.node2?.humidity
    }
    else if (indicator == 'co') {
        check1 = fdas[0]?.data[0]?.node1?.co > fdas[1]?.data[0]?.node1?.co
        check2 = fdas[0]?.data[0]?.node2?.co > fdas[1]?.data[0]?.node2?.co
        check3 = fdas[0]?.data[1]?.node1?.co > fdas[1]?.data[1]?.node1?.co
        check4 = fdas[0]?.data[1]?.node2?.co > fdas[1]?.data[1]?.node2?.co
    }

    useEffect(() => {

        if (check1) {
            setIncrease1(true)
        } else {
            setIncrease1(false)
        }
        if (check2) {
            setIncrease2(true)
        } else {
            setIncrease2(false)
        }

        if (check3) {
            setIncrease3(true)
        } else {
            setIncrease3(false)
        }
        if (check4) {
            setIncrease4(true)
        } else {
            setIncrease4(false)
        }
    }, [check1, check2, check3, check4])

    return [increase1, increase2, increase3, increase4]

}