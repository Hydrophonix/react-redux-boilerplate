// Core
import { takeEvery } from "redux-saga/effects";

// Instruments
import { fetch }               from "./todo.slice";
import { callFetchTodoWorker } from "./workers";
console.log("|||======||| ~ file: todo.saga.ts ~ line 6 ~ fetch", fetch.name);

export function* watchTodoAsync() {
    yield takeEvery(fetch.toString(), callFetchTodoWorker);
}
