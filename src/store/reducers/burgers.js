var initialState = {
	ingredients: [],
	all_burgers: [],
};

const Burgers = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return action.payload
    default:
      break;
  }
  return state;
}

export default Burgers;