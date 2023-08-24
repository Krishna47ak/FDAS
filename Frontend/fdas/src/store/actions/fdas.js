import { useMemo } from 'react'
import fdasApi from '../../api/fdasApi'
import { FETCH_DATA } from '../types'

import store from '../store'



export const fetchData = () => async dispatch => {
    const state = store.getState();
    const fdas = state.fdas.fdas
    console.log(fdas[0]?.data);
    try {
        const response = await fdasApi.get('/api/fdas')
        if (response?.data[0]?.data !== fdas[0]?.data) {
            console.log("hi1");
            dispatch({ type: FETCH_DATA, payload: response?.data })
        }
    } catch (err) {
        // dispatch({ type: TODO_ERROR })
        const errors = err?.response?.data?.errors
        console.error(errors);
    }
}

// export const createFdas = (temp, humidity, co, trigger) => async dispatch => {
//     try {
//         const response = await fdasApi.post('/api/fdas', { temp, humidity, co, trigger })
//         // dispatch(fetchTodos())
//         console.log(response.data);
//         // history('/')
//     } catch (err) {
//         // dispatch({ type: TODO_ERROR })
//         const errors = err?.response?.data?.errors
//         console.error(errors);
//     }
// }
