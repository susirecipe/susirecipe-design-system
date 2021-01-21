import { MODAL_OPEN, MODAL_CLOSE } from 'actions/modal';

const initialState: boolean = false;

export const modalReducer = (state = initialState, action: DefaultAction) => {
  switch (action.type) {
    case MODAL_OPEN:
      return true;
    case MODAL_CLOSE:
      return false;
    default:
      return state;
  }
};
