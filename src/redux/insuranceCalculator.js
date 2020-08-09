import { put, takeLatest, select } from "redux-saga/effects";

export const actionTypes = {
  SetFileds: "SET_FIELDS",
  ClearFileds: "CLEAR_FIELDS",
  SetFinace: "SET_FINACE"
};

const initialState = {
  fileds: undefined,
  finace: undefined
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SetFileds: {
      const { fileds } = action;
      return { ...state, fileds };
    }

    case actionTypes.SetFinace: {
      const { finace } = action;
      return { ...state, finace };
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
  setFinace: finace => ({ type: actionTypes.SetFinace, finace }),
  clearFileds: () => ({ type: actionTypes.ClearFileds })
};

export function* saga() {
  yield takeLatest(actionTypes.SetFileds, function* setFiledsSaga(payload) {
    yield delay(3000);

    const { insuranceCalculator: state } = yield select();

    let today_finace = 0;
    let ten_years_finace = 0;

    //calculate
    today_finace = yield calculateTodayFinace(state.fileds);
    ten_years_finace = yield calculateTenYearsFinace(state.fileds);

    yield put(actions.setFinace({ today_finace, ten_years_finace }));
  });
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const calculateTodayFinace = fileds => {
  return (
    getVal(fileds.replacement_amount) +
    getVal(fileds.healthcare_expenses) +
    getVal(fileds.modification_expenses) +
    getVal(fileds.homecare_expenses) -
    getVal(fileds.other_expenses)
  );
};

const calculateTenYearsFinace = fileds => {
  return (
    ((getVal(fileds.replacement_amount) +
      getVal(fileds.healthcare_expenses) +
      getVal(fileds.modification_expenses) +
      getVal(fileds.homecare_expenses) +
      getVal(fileds.other_expenses)) *
      1.2) /
    getVal(fileds.recovery_period)
  );
};

const getVal = val => {
  return val ? val : 0;
};
