// Core
import { Box, Button, Typography } from "@mui/material";
import { FC }                      from "react";
import { useHistory }              from "react-router";
import { SignUpForm }              from "./sign-up-form";

export const SignUp: FC = () => {
    const { push } = useHistory();

    return (
        <Box>
            <Typography
                align = "center"
                marginBottom = { 2 }
                variant = "h4">
                Sign Up
            </Typography>

            <SignUpForm />

            <Typography
                align = "center"
                marginTop = { 1 }>
                or
            </Typography>

            <Button
                sx = {{ marginTop: 1, width: "100%" }}
                onClick = { () => push("/signin") }>
                SIGN IN
            </Button>
        </Box>
    );
};
