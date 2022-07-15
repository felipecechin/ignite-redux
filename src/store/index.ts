import { configureStore } from "@reduxjs/toolkit";
import { ICartState } from "./modules/cart/types";
import rootReducer from "./modules/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./modules/rootSaga";

export interface IState {
    cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware];

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: middlewares
})

sagaMiddleware.run(rootSaga)

export default store;