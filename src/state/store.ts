// Core
import { configureStore } from "@reduxjs/toolkit";

// Instruments
import { rootReducer }                      from "./rootReducer";
import { rootSaga }                         from "./rootSaga";
import { loggerMiddleware, sagaMiddleware } from "./middlewares";

// TODO: update webpack config
const isDev = true;

export const store = configureStore({
    reducer:    rootReducer,
    devTools:   isDev,
    middleware: (getDefaultMiddleware) => {
        const middleware = getDefaultMiddleware({ thunk: false });

        middleware.push(
            //@ts-ignore
            sagaMiddleware,
        );

        //@ts-ignore
        isDev && middleware.push(loggerMiddleware);

        return middleware;
    },
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

