// Core
import { Typography }            from "@mui/material";
import { FC, PropsWithChildren } from "react";

export const PageHeader: FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <Typography
            align = "center"
            sx = {{ marginBottom: 2 }}
            variant = "h4">
            {children}
        </Typography>
    );
};
