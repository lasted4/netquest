import {createStore, applyMiddleware} from 'redux'

import axios from 'axios'
import thunk from 'redux-thunk'
import axiosMiddleware from 'redux-axios-middleware'

import rootReducer from '../reducers'

const configureStore = () => {
    
  const client = axios.create({
    baseURL:'/v1',
    responseType: 'json'
  })

  const middlewares = [thunk, axiosMiddleware(client)]

  return createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )
}

export default configureStore