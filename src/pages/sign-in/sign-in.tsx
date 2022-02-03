// Core
import { Box, Button, Typography } from "@mui/material";
import { FC, useEffect }           from "react";
import { useHistory }              from "react-router";

// Components
import { SignInError } from "./sign-in-error";
import { SignInForm }  from "./sign-in-form";

// State
import { auth, useAppDispatch } from "../../state";

export const SignIn: FC = () => {
    const dispatch = useAppDispatch();
    const { push } = useHistory();


    useEffect(() => () => {
        dispatch(auth.clearError());
    }, [ dispatch ]);


    return (
        <Box>
            <Typography
                align = "center"
                marginBottom = { 2 }
                variant = "h4">
                Sign In
            </Typography>

            <SignInError />
            <SignInForm />

            <Typography
                align = "center"
                marginTop = { 1 }>
                or
            </Typography>

            <Button
                sx = {{ marginTop: 1, width: "100%" }}
                onClick = { () => push("/signup") }>
                Sign Up
            </Button>
        </Box>
    );
};
