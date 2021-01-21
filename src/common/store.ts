import { createStore, combineReducers } from 'redux';
import { slideReducer } from 'reducers/slidebar';
import { dropdownReducer } from 'reducers/dropdown';
import { modalReducer } from 'reducers/modal';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  slidebar: slideReducer,
  dropdown: dropdownReducer,
  modal: modalReducer,
});

const store = createStore(rootReducer);

export default store;
