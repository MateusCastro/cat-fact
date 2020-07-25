import { Reducer } from "redux";
import { CatFactActionsTypes, CatFactState } from "./types";

const INITIAL_STATE: CatFactState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<CatFactState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CatFactActionsTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case CatFactActionsTypes.LOAD_SUCCESS:
      const catFacts = action.payload.data.all;
      return {
        ...state,
        loading: false,
        error: false,
        data: catFacts,
      };
    case CatFactActionsTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
