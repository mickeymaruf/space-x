import { GET_DATA_FAILED, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "../constants/dataContant";

const initialState = {
    isLoading: false,
    data: [],
    error: null
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case GET_DATA_SUCCESS:
            return {
                isLoading: false,
                data: action.payload,
                error: null
            }

        case GET_DATA_FAILED:
            return {
                isLoading: false,
                data: [],
                error: action.payload
            }

        default:
            return state;
    }
}

export default dataReducer;