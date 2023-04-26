import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
// import rootSaga from './sagas/rootSaga'

const rootReducer = combineReducers({
})

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: []
      }
    }).concat(middlewares)
})

// sagaMiddleware.run(rootSaga)

export { store }

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = AppStore['dispatch']