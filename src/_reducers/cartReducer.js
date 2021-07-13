/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unreachable */
const initialState = {
  allList: [{ name: "", amount: "" }],
  bondList: [{ id: "", amount: "" }],
};
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_LIST":
      return {
        ...state,
        allList: [...state.allList, payload],
      };
    case "ADD_TO_BOND_LIST":
      return {
        ...state,
        bondList: [...state.bondList, payload],
      };

    default:
      return state;
  }
}
