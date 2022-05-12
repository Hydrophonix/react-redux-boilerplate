// Core
import { Paper }                 from "@mui/material";
import { FC, PropsWithChildren } from "react";

export const PageContainer: FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <Paper sx = {{
            display:       "flex",
            flexDirection: "column",
            alignItems:    "center",
            paddingY:      2,
            paddingX:      5,
            minWidth:      800,
        }}>
            {children}
        </Paper>
    );
};
