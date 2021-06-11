const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        action.payload,
        ...state
      ];
    case 'remove':
      return state.filter((item) => item.id !== action.payload);
    case 'reset':
      return action.payload;
    default:
      return state;
  }
};

export default reducer