import { SHOW_DROPDOWN, HIDDEN_DROPDOWN } from 'actions/dropdown';

const initialState: boolean = false;

export const dropdownReducer = (state = initialState, action: DefaultAction): boolean => {
  switch (action.type) {
    case SHOW_DROPDOWN:
      return action.payload;
    case HIDDEN_DROPDOWN:
      return action.payload;
    default:
      return state;
  }
}