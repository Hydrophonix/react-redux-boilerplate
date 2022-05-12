// Core
import { CircularProgress } from "@mui/material";
import { FC }               from "react";
import { Routes, Route }    from "react-router-dom";

// Pages
import {
    CreateUserPage,
    EditUserPage,
    HomePage,
    NotFoundPage,
    Profile,
    SignIn,
    SignUp,
    UsersPage,
} from "../../pages";
import { useAppSelector } from "../../state";
import { RequireNotAuth } from "./reqiure-not-auth";

// Components
import { RequireAdmin } from "./require-admin";
import { RequireAuth }  from "./require-auth";

export const AppRouter: FC = () => {
    const isLoading = useAppSelector((state) => state.auth.isLoading);

    if (isLoading) {
        return (
            <CircularProgress color = "inherit"/>
        );
    }

    return (
        <Routes>
            <Route
                element = {
                    <RequireAuth navigateTo = "/signin">
                        <Profile />
                    </RequireAuth>
                }
                path = "/profile"
            />
            <Route
                element = {
                    <RequireNotAuth navigateTo = "/">
                        <SignUp />
                    </RequireNotAuth>
                }
                path = "/signup"
            />
            <Route
                element = {
                    <RequireNotAuth navigateTo = "/">
                        <SignIn />
                    </RequireNotAuth>
                }
                path = "/signin"
            />
            <Route
                element = { (
                    <RequireAuth navigateTo = "/signin">
                        <RequireAdmin navigateTo = "/not-found">
                            <UsersPage />
                        </RequireAdmin>
                    </RequireAuth>
                ) }
                path = "/users"
            />
            <Route
                element = { (
                    <RequireAuth navigateTo = "/signin">
                        <RequireAdmin navigateTo = "/not-found">
                            <EditUserPage />
                        </RequireAdmin>
                    </RequireAuth>
                ) }
                path = "/users/:userId"
            />
            <Route
                element = { (
                    <RequireAuth navigateTo = "/signin">
                        <RequireAdmin navigateTo = "/not-found">
                            <CreateUserPage />
                        </RequireAdmin>
                    </RequireAuth>
                ) }
                path = "/users/create"
            />
            <Route
                element = { <HomePage /> }
                path = "/"
            />
            <Route
                element = { <NotFoundPage /> }
                path = "*"
            />
        </Routes>
    );
};
