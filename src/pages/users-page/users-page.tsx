// Core
import { Button, Paper, Typography } from "@mui/material";
import { push }                      from "connected-react-router";
import { FC }                        from "react";

// Instruments
import { useAppDispatch } from "../../state";
import { UserTable }      from "./user-table";

export const UsersPage: FC = () => {
    const dispatch = useAppDispatch();

    return (
        <Paper sx = {{
            display:       "flex",
            flexDirection: "column",
            alignItems:    "center",
            paddingY:      2,
            paddingX:      5,
        }}>
            <Typography
                align = "center"
                sx = {{ marginBottom: 2 }}
                variant = "h4">
                Users
            </Typography>

            <UserTable />

            <Button
                color = "primary"
                sx = {{ marginTop: 2 }}
                variant = "contained"
                onClick = { () => dispatch(push("/users/create")) }>
                CREATE USER
            </Button>
        </Paper>
    );
};
