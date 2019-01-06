import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { getInfo } from './reducers.jsx'


export const store = createStore(getInfo, applyMiddleware(thunk));