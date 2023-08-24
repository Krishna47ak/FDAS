import fdasApi from '../../api/fdasApi'
// import { DELETE_TODO, FETCH_TODOS, TODO_ERROR } from '../types'


// export const fetchTodos = () => async dispatch => {
//     try {
//         const response = await todoApi.get('/api/todos/')
//         dispatch({ type: FETCH_TODOS, payload: response?.data })
//     } catch (err) {
//         dispatch({ type: TODO_ERROR })
//         const errors = err?.response?.data?.errors
//         console.error(errors);
//     }
// }

export const createFdas = (temp, humidity, co, trigger) => async dispatch => {
    try {
        const response = await fdasApi.post('/api/fdas', { temp, humidity, co, trigger })
        // dispatch(fetchTodos())
        console.log(response.data);
        // history('/')
    } catch (err) {
        // dispatch({ type: TODO_ERROR })
        const errors = err?.response?.data?.errors
        console.error(errors);
    }
}
