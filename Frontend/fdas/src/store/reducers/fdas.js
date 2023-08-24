import { DELETE_TODO, FETCH_TODOS, TODO_ERROR } from "../types"

const initialState = {
    todos: [],
    loading: true
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case FETCH_TODOS:
            return {
                ...state,
                todos: payload,
                loading: false
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo._id !== payload),
                loading: false
            }
        case TODO_ERROR:
            return {
                ...state,
                todos: [],
                loading: false
            }
        default:
            return state
    }
}