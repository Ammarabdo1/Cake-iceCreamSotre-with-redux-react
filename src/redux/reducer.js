import { ACTIONS } from "./types";
const initialState = {
  numOfCakes: 30,
  numOfIceCreams: 40,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload.number,
      };
    case ACTIONS.BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload.number,
      }
    default:
        return state
  }
};

export default reducer