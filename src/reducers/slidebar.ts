import { SLIDE_OPEN, SLIDE_CLOSE } from 'actions/slidebar';

const initialState: boolean = false;

export const slideReducer = (state = initialState, action: DefaultAction): boolean => {
  switch (action.type) {
    case SLIDE_OPEN:
      return true;
    case SLIDE_CLOSE:
      return false;
    default:
      return state;
  }
};
