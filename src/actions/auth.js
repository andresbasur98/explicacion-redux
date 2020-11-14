import { types } from "../types/types"

export const login = (email, password) => {

    return {
        type: types.login,
        payload: {
            email: email,
            password: password
        }
    }

}