import { SLIDE_OPEN, SLIDE_CLOSE, SlideAction } from 'actions/slidebar';

const initialState: boolean = false;

export const slideReducer = (state = initialState, action: SlideAction): boolean => {
  switch (action.type) {
    case SLIDE_OPEN:
      return true;
    case SLIDE_CLOSE:
      return false;
    default:
      return state;
  }
};
