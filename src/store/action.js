import { USER, SOCKET } from "./constant";

export const updateUser = (data) => {
    return {
        type: USER,
        payload: data
    }
}

export const updateSocket = (data) => {
    return {
        type: SOCKET,
        payload: data
    }
}