export const SLIDE_OPEN = 'SLIDE_OPEN';
export const SLIDE_CLOSE = 'SLIDE_CLOSE';

export const slideOpen = (): DefaultAction => ({
  type: SLIDE_OPEN,
  payload: true,
});

export const slideClose = (): DefaultAction => ({
  type: SLIDE_CLOSE,
  payload: false,
});
