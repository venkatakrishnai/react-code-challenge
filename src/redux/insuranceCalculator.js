export const actionTypes = {
  SetFileds: "SET_FIELDS"
};

const initialState = {
  fileds: undefined
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SetFileds: {
      const { fileds } = action;
      console.log("oooo", fileds);
      return { ...state, fileds };
    }

    default:
      return state;
  }
};

export const actions = {
  setFileds: fileds => ({ type: actionTypes.SetFileds, fileds })
};

export function* saga() {}
