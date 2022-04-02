import { FilterActionTypes, TFilterAction } from "../../types";


const initialState = {
  showFavorited: false,
}

export const filterReducer = (state = initialState, action: TFilterAction) => {
  switch (action.type) {
    case FilterActionTypes.FILTER_FAVORITED:
      return { showFavorited: !state.showFavorited }
    default:
      return state;
  }
}