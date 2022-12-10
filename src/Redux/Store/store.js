
import { compose} from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import {courcesReducer, stateReducer,ambbesadorReducer,purposeReducer,applicationReducer, authReducer,themeReducer,collegeReducer, countryReducer,rgisterReducer } from '../Slice';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = configureStore({
  reducer: {
    application:applicationReducer,
    puropose:purposeReducer,
    authUser:authReducer,
    themeMode:themeReducer,
    colleges:collegeReducer,
    country:countryReducer,
    register:rgisterReducer,
    ambesador:ambbesadorReducer,
    state:stateReducer,
    cources:courcesReducer
  },
  composeEnhancers
})
