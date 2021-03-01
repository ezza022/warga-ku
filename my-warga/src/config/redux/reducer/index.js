const initState = {
  users: [],
  user: {},
  showModal: false,
};

const reducer = (state = initState, action) => {
  if (action.type === "CHANGE_USERS") {
    return {
      ...state,
      users: action.value,
    };
  }
  if (action.type === "CHANGE_USER") {
    return {
      ...state,
      user: action.value,
    };
  }
  if (action.type === "CHANGE_SHOWMODAL") {
    return {
      ...state,
      showModal: action.value,
    };
  }
  if (action.type === "CHANGE_LOADING") {
    return {
      ...state,
      isLoading: action.value,
    };
  }
  return state;
};

export default reducer;
