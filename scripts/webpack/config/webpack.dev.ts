// Core
import merge from "webpack-merge";

// Configurations
import { getCommonConfig } from "./webpack.common";

// Modules
import * as modules from "../modules";

export const getDevConfig = () => {
    return merge(
        getCommonConfig(),
        {
            mode:                  "development",
            stats:                 "none",
            devtool:               "eval-cheap-module-source-map",
            infrastructureLogging: {
                level: "none",
            },
        },
        // modules.defineEnvVariables(false),
        // modules.loadImagesDev(),
        // modules.loadDevCss(),
        modules.connectHMR(),
        modules.connectFriendlyErrors(),
    );
};
