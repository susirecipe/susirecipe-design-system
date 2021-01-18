export const SHOW_DROPDOWN = 'SHOW_DROPDOWN';
export const HIDDEN_DROPDOWN = 'HIDDEN_DROPDOWN';

export const showDropdown = (): DefaultAction => ({
  type: SHOW_DROPDOWN,
  payload: true,
});

export const hiddenDropdown = (): DefaultAction => ({
  type: HIDDEN_DROPDOWN,
  payload: false,
});
