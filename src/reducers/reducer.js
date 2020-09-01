export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_IMG':
      return { ...state, imgUrl: action.imgUrl }
    default:
      return state;
  }
};