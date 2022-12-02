// import {createLegacyStore} from 'redux'
import { legacy_createStore } from 'redux';
import { calciReducer } from './reducer'

 const store= legacy_createStore(calciReducer);
 
export default store