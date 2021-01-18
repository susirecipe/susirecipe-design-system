import { createStore, combineReducers } from 'redux';
import { slideReducer } from 'reducers/slidebar';
import { dropdownReducer } from 'reducers/dropdown';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  slidebar: slideReducer,
  dropdown: dropdownReducer,
});

const store = createStore(rootReducer);

export default store;
