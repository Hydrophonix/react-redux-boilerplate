// Core
import { Configuration }      from "webpack";
import { createTransformer }  from "typescript-plugin-styled-components";
import reactRefreshTypeScript from "react-refresh-typescript";

// Instruments
import { nodeModulePath } from "../constants";

export const loadTypeScript = (isDev: boolean): Configuration => ({
    module: {
        rules: [
            {
                test:    /\.ts(x?)$/,
                include: /src/,
                exclude: /node_modules/,
                use:     {
                    loader:  "ts-loader",
                    options: {
                        getCustomTransformers: () => {
                            const transformers = [ createTransformer() ];

                            if (isDev) {
                                transformers.push(reactRefreshTypeScript());
                            }

                            return {
                                before: transformers,
                            };
                        },
                        transpileOnly:   isDev,
                        compilerOptions: {
                            jsx: isDev
                                ? "react-jsxdev"
                                : "react-jsx",
                        },
                    },
                },
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test:    /\.js$/,
                loader:  "source-map-loader",
                exclude: [
                    nodeModulePath("@reduxjs/toolkit/dist"),
                    // nodeModulePath("@apollo/client/utilities/observables"),
                    // nodeModulePath("apollo-link-token-refresh"),
                ],
            },
        ],
    },
});
