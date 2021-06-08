const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: state.length,
          type: "Apt",
          rooms: 1,
          price: 1000000,
          address: "Mock address",
        }
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