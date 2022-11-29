import {createLegacyStore} from 'redux'
import { calciReducer } from './reducer'

export const store= createLegacyStore(calciReducer);
