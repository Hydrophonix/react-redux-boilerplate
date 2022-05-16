// Core
import { PayloadAction }             from "@reduxjs/toolkit";
import { call, put, SagaReturnType } from "redux-saga/effects";

// Instruments
import { appSelect }                         from "../../../hooks";
import { findUsersAPI }                      from "../users.api";
import { users }                             from "../users.slice";
import { FindUsersPayload, FindUsersParams } from "../users.types";

export function* callFindUsersWorker({ payload }: PayloadAction<FindUsersPayload|undefined>) {
    try {
        const { skip, limit, order, sort } = yield* appSelect((state) => state.users);
        const params: FindUsersParams = {
            skip,
            sort,
            limit,
            order,
            ...payload,
        };
        const { data }: SagaReturnType<typeof findUsersAPI> = yield call(findUsersAPI, params);

        yield put(users.findSuccess(data));
    } catch (error) {
        yield put(users.findError());
    }
}
