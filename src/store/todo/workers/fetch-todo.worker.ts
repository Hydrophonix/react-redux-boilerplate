// Core
import { call, put } from "redux-saga/effects";

// Instruments
import { fetchSuccess } from "../todo.slice";
import { Todo }         from "../todo.types";

const getTodo = (): Promise<Todo[]> => new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            {
                id:   "test",
                text: "first todo",
            },
            {
                id:   "test",
                text: "2 todo",
            },
            {
                id:   "test",
                text: "3 todo",
            },
        ]);
    }, 1750);
});

// const getTodosFromDB = async () => {
//     const db = await openDB("todo");
//     console.log("|||======||| ~ file: fetch-todo.worker.ts ~ line 27 ~ getTodosFromDB ~ db", db);
// };

export function* callFetchTodoWorker() {
    const todo: Todo[] = yield call(getTodo);
    // yield call(getTodosFromDB);

    yield put(fetchSuccess({ list: todo }));
}
