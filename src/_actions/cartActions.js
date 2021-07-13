export const addToCart = (name, amount) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_TO_LIST",
      payload: { name: name, amount: amount },
    });
  } catch (error) {
    console.log(error);
  }
};
export const addToBondList = (id, amount) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_TO_BOND_LIST",
      payload: { id: id, amount: amount },
    });
  } catch (error) {
    console.log(error);
  }
};
