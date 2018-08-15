var initialState = {
	name: '',
  ingredients: [
    {
      name: '',
      price: '',
      id: '',
    }
  ]
};

const burger = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA_BURGER':
      return action.payload
    default:
      break;
  }
  return state;
}

export default burger;