// Core
import { FC, PropsWithChildren } from "react";
import { Box, IconButton }       from "@mui/material";
import { ArrowBack }             from "@mui/icons-material";
import { useNavigate }           from "react-router-dom";

// Elements
import { PageHeader } from "../elements";

export const PageBackHeader: FC<PropsWithChildren<{}>> = ({ children }) => {
    const navigate = useNavigate();

    return (
        <Box sx = {{
            position:       "relative",
            display:        "flex",
            width:          "100%",
            justifyContent: "center",
        }}>
            <IconButton
                sx = {{
                    position: "absolute",
                    left:     0,
                    top:      0,
                }}
                onClick = { () => navigate(-1) }>
                <ArrowBack />
            </IconButton>

            <PageHeader>
                {children}
            </PageHeader>
        </Box>
    );
};
