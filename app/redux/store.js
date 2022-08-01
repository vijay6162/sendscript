import {
    configureStore,
    getDefaultMiddleware
  } from "@reduxjs/toolkit";
  import createSagaMiddleware from "redux-saga";
  import rootReducer from "./RootReducers";
  import rootSagas from "./RootSagas";
  
  let sagaMiddleware = createSagaMiddleware();
  const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
  
  const store = configureStore({
    reducer: rootReducer,
    middleware
  });
  
  sagaMiddleware.run(rootSagas);
  
  export default store;
  