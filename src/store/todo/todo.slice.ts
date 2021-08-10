// Core
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import {
    FetchTodoPayload,
    FetchTodoSuccessPayload,
    InitialState,
} from "./todo.types";

const initialState: InitialState = {
    list:      [],
    isLoading: false,
    error:     null,
    // Pagination
    skip:      0,
    take:      10,
    total:     0,
};

const {
    actions: {
        fetch,
        fetchSuccess,
    },
    reducer,
} = createSlice({
    name:     "todo",
    initialState,
    reducers: {
        fetch(state, action: PayloadAction<FetchTodoPayload>) {
            state.skip = action.payload.skip;
            state.take = action.payload.take;
            state.isLoading = true;
        },
        fetchSuccess(state, action: PayloadAction<FetchTodoSuccessPayload>) {
            console.log("|||======||| ~ file: todo.slice.ts ~ line 36 ~ fetchSuccess ~ action", action);
            state.isLoading = false;
            state.error = null;
            state.list = action.payload.list;
        },
    },
});

export default reducer;

export { fetch, fetchSuccess };
