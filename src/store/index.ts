import { createStore } from 'redux';
import rootReducer from '../reducers/productReducer';

const store = createStore(rootReducer);

export default store;
