import { put, takeLatest, select } from "redux-saga/effects";

export const actionTypes = {
  SetFileds: "SET_FIELDS",
  ClearFileds: "CLEAR_FIELDS",
  SetFinace: "SET_FINACE"
};

const initialState = {
  fileds: undefined
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SetFileds: {
      const { fileds } = action;
      return { ...state, fileds };
    }

    case actionTypes.SetFinace: {
      const { fileds } = action;
      return { ...state, fileds };
    }

    case actionTypes.ClearFileds: {
      return { ...initialState };
    }

    default:
      return state;
  }
};

export const actions = {
  setFileds: fileds => ({ type: actionTypes.SetFileds, fileds }),
  setFinace: fileds => ({ type: actionTypes.SetFinace, fileds }),
  clearFileds: () => ({ type: actionTypes.ClearFileds })
};

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* saga() {
  yield takeLatest(actionTypes.SetFileds, function* setFiledsSaga(payload) {
    yield delay(3000);
    const { insuranceCalculator: state } = yield select();

    let today_finace = 0;
    let ten_years_finace = 0;

    //calculate

    yield put(
      actions.setFinace({ ...state.fileds, today_finace, ten_years_finace })
    );
    console.log("state", state.fileds);
  });
}
