import { ACTIONS } from "./types"
export const buyCake = (number) => {
    return{
        type: ACTIONS.BUY_CAKE,
        payload: {number: number},
    }
}

export const buyIceCream = number => {
    return{
        type: ACTIONS.BUY_ICECREAM,
        payload: {number: number}
    }
}