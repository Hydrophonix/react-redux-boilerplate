// Core
import { PayloadAction }             from "@reduxjs/toolkit";
import { call, put, SagaReturnType } from "redux-saga/effects";

// Instruments
import { catchErrorWorker }  from "../../../catch-error.worker";
import { createUserAPI }     from "../users.api";
import { users }             from "../users.slice";
import { CreateUserPayload } from "../users.types";

export function* callCreateUserWorker({ payload }: PayloadAction<CreateUserPayload>) {
    try {
        const { data }: SagaReturnType<typeof createUserAPI> = yield call(createUserAPI, payload);

        yield put(users.createSuccess(data));
    } catch (error) {
        yield* catchErrorWorker(error, users.createError);
    }
}
