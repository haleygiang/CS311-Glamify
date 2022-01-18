import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { persistStore } from "redux-persist";

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

export const persistor = persistStore(store);

// export default { store, persistor };