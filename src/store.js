
import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './state/reducers';
import { SchemaState } from './state/reducers/schema';
const preloadSchema = (files) => {
};

export function configureStore(appConfig) {
    const { record, files, config, permissions, schema, ...extra } = appConfig;
    const initialDepositState = {
      record,
      config,
      //permissions,
      schema,
    };
    const preloadedState = {
      //deposit: initialDepositState,
      //files: preloadFiles(files || {}),
      //schema: "",
    };
  
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
      rootReducer,
      preloadedState,
      composeEnhancers(applyMiddleware(thunk.withExtraArgument(extra)))
    );
  }
  