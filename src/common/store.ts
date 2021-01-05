import { createStore, combineReducers } from 'redux';
import { slideReducer } from 'reducers/slidebar';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  slidebar: slideReducer
});

const store = createStore(rootReducer);

export default store;
