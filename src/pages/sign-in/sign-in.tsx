// Core
import { Button, Typography } from "@mui/material";
import { FC, useEffect }      from "react";
import { useNavigate }        from "react-router-dom";

// Components
import { SignInError } from "./sign-in-error";
import { SignInForm }  from "./sign-in-form";

// Elements
import { PageContainer, PageHeader } from "../../elements";

// Instruments
import { auth, useAppDispatch } from "../../state";

export const SignIn: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    useEffect(() => () => {
        dispatch(auth.clearError());
    }, [ dispatch ]);


    return (
        <PageContainer>
            <PageHeader>
                Sign In
            </PageHeader>

            <SignInError />
            <SignInForm />

            <Typography
                align = "center"
                marginTop = { 1 }>
                or
            </Typography>

            <Button
                sx = {{ marginTop: 1, width: "100%" }}
                onClick = { () => navigate("/signup") }>
                Sign Up
            </Button>
        </PageContainer>
    );
};
