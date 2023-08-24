import { FETCH_DATA } from "../types"

const initialState = {
    fdas: [],
    loading: true
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case FETCH_DATA:
            return {
                ...state,
                fdas : payload,
                loading: false
            }
        default:
            return state
    }
}