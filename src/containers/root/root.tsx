// Core
import { FC }            from "react";
import { Provider }      from "react-redux";
import { ThemeProvider } from "@mui/material";

// Containers
import { App }               from "../app";
import { ConfirmationModal } from "../confirmational-modal";

// Componentns
import { RouterProvider } from "./router-provider";

// Instruments
import { store }        from "../../state/store";
import { history }      from "../../state/history";
import { defaultTheme } from "../../assets";

export const Root: FC = () => {
    return (
        <Provider store = { store }>
            <ThemeProvider theme = { defaultTheme }>
                <RouterProvider history = { history }>
                    <App />
                    <ConfirmationModal />
                </RouterProvider>
            </ThemeProvider>
        </Provider>
    );
};
