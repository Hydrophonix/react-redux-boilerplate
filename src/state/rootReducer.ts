// Core
import { combineReducers } from "@reduxjs/toolkit";

// Reducers
import { usersReducer } from "./domains/users/users.slice";
import { authReducer }  from "./domains/auth/auth.slice";
import { uiReducer }    from "./domains/ui/ui.slice";

export const rootReducer = combineReducers({
    ui:    uiReducer,
    auth:  authReducer,
    users: usersReducer,
});
