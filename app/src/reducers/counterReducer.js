import actions from "../constant/actionTypes";

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.COUNT_UP:
      return { ...state, count: state.count + 1 };
    case actions.COUNT_DOWN:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
