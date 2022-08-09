function tokenDataReducer(state = {}, action: any) {
  const { type, payload } = action;
  if (type == "getTokenData") {
    return { ...state, data: payload };
  } else {
    return state;
  }
}

export default tokenDataReducer;
