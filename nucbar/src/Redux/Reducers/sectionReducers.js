import { SET_SECTIONS } from '../Actions/sectionsActions';
const INITIAL_STATE = {
  sections: null,
};

const sectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SECTIONS:
      return {
        ...state,
        sections: action.payload,
      };

    default:
      return state;
  }
};

export default sectionReducer;
