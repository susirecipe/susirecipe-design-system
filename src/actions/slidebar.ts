export interface SlideAction {
  type: string;
  payload: boolean;
}

export const SLIDE_OPEN = 'SLIDE_OPEN' as const;
export const SLIDE_CLOSE = 'SLIDE_CLOSE' as const;

export const slideOpen = (): SlideAction => ({
  type: SLIDE_OPEN,
  payload: true,
});

export const slideClose = (): SlideAction => ({
  type: SLIDE_CLOSE,
  payload: false,
});
