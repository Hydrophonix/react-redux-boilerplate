// Core
import { Button, Typography } from "@mui/material";
import { FC }                 from "react";
import { useNavigate }        from "react-router-dom";

// Components
import { SignUpForm } from "./sign-up-form";

// Elements
import { PageContainer, PageHeader } from "../../elements";

export const SignUp: FC = () => {
    const navigate = useNavigate();

    return (
        <PageContainer>
            <PageHeader>
                Sign Up
            </PageHeader>

            <SignUpForm />

            <Typography
                align = "center"
                marginTop = { 1 }>
                or
            </Typography>

            <Button
                sx = {{ marginTop: 1, width: "100%" }}
                onClick = { () => navigate("/signin") }>
                SIGN IN
            </Button>
        </PageContainer>
    );
};
