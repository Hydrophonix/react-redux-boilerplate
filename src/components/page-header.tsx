// Core
import { FC }                          from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBack }                   from "@mui/icons-material";
import { useHistory }                  from "react-router";

interface PageHeaderProps {
    text: string;
}

export const PageHeader: FC<PageHeaderProps> = ({ text }) => {
    const { goBack } = useHistory();

    return (
        <Box sx = {{ position: "relative" }}>
            <IconButton
                sx = {{
                    position: "absolute",
                    left:     0,
                    top:      0,
                }}
                onClick = { () => goBack() }>
                <ArrowBack />
            </IconButton>
            <Typography
                align = "center"
                variant = "h4">
                {text}
            </Typography>
        </Box>
    );
};
