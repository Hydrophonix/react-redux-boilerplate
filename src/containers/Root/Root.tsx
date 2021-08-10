// Core
import { FC }            from "react";
import { Provider }      from "react-redux";
import { ThemeProvider } from "@material-ui/core";

// App
import { App } from "../App";

// Store
import { store } from "../../store";
import { theme } from "../../assets";

export const Root: FC = () => {
    return (
        <Provider store = { store }>
            <ThemeProvider theme = { theme }>
                <App />
            </ThemeProvider>
        </Provider>
    );
};
