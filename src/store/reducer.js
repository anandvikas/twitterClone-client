import { USER, SOCKET } from "./constant";

//-----------------------------------
const initialStateAuth = {
    user: null
}

export const auth = (state = initialStateAuth, action) => {
    switch (action.type) {
        case USER:
            return { ...state, user: action.payload };

        default: return { ...state };
    }
}

//-----------------------------------
const initialStateSite = {
    socket: null
}

export const site = (state = initialStateSite, action) => {
    switch (action.type) {
        case SOCKET:
            return { ...state, socket: action.payload };

        default: return { ...state };
    }
}