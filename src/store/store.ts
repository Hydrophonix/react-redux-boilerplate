// Core
import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector,
} from "react-redux";
import { configureStore }   from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { all, fork }        from "@redux-saga/core/effects";

// Reducers
import todoReducer        from "./todo/todo.slice";
import { watchTodoAsync } from "./todo/todo.saga";

function* rootSaga() {
    yield all([ fork(watchTodoAsync) ]);
}
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
    devTools:   false,
    middleware: [ sagaMiddleware ],
});

sagaMiddleware.run(rootSaga);

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
