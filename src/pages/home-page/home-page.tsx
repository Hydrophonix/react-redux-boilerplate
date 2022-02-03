// Core
import { Button, Box, Paper, Typography } from "@mui/material";

import { FC } from "react";

export const HomePage: FC = () => {
    return (
        <Paper sx = {{
            display:       "flex",
            flexDirection: "column",
            alignItems:    "center",
            paddingY:      2,
            paddingX:      5,
            minWidth:      800,
        }}>
            <Typography
                align = "center"
                sx = {{ marginBottom: 2 }}
                variant = "h4">
                Home page
            </Typography>
            Add basic info about project
        </Paper>
    );
};
