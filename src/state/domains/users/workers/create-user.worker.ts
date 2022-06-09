// Core
import { PayloadAction }             from "@reduxjs/toolkit";
import { call, put, SagaReturnType } from "redux-saga/effects";

// Instruments
import { normalizeError }    from "../../../utils";
import { createUserAPI }     from "../users.api";
import { users }             from "../users.slice";
import { CreateUserPayload } from "../users.types";

export function* callCreateUserWorker({ payload }: PayloadAction<CreateUserPayload>) {
    try {
        const { data }: SagaReturnType<typeof createUserAPI> = yield call(createUserAPI, payload);

        yield put(users.createSuccess(data));
    } catch (error) {
        const serverError = normalizeError(error);

        yield put(users.createError(serverError));
    }
}
