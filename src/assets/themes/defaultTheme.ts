// Core
import { createMuiTheme } from "@material-ui/core";
import { orange }         from "@material-ui/core/colors";

declare module "@material-ui/core" {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

export const theme = createMuiTheme({
    status: {
        danger: orange[ 500 ],
    },
});
