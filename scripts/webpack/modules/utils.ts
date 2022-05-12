// Core
import {
    Configuration,
    // DefinePlugin,
    ProvidePlugin,
    HotModuleReplacementPlugin,
} from "webpack";
import ReactRefreshWebpackPlugin   from "@pmmmwh/react-refresh-webpack-plugin";
import WebpackBar                  from "webpackbar";
import FriendlyErrorsWebpackPlugin from "@soda/friendly-errors-webpack-plugin";
import { BundleAnalyzerPlugin }    from "webpack-bundle-analyzer";
// import dotenv from 'dotenv';

export const connectBuildProgressIndicator = (): Configuration => ({
    plugins: [
        new WebpackBar({
            name:  "Building status",
            fancy: true,
        }),
    ],
});

export const connectFriendlyErrors = (): Configuration => ({
    plugins: [ new FriendlyErrorsWebpackPlugin() ],
});

export const connectHMR = (): Configuration => ({
    plugins: [
        new HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
    ],
});

export const connectBundleAnalyzer = (): Configuration => ({
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode:      "disabled",
            openAnalyzer:      false,
            generateStatsFile: true,
        }),
    ],
});

// export const defineEnvVariables = (isProd: boolean): Configuration => ({
//     plugins: [
//         new DefinePlugin({
//             'process.env': JSON.stringify({
//                 ...dotenv.config({ path: isProd ? 'prod.env' : '.env' }).parsed,
//             }),
//         }),
//     ],
// });

export const provideGlobals = (): Configuration => ({
    plugins: [
        new ProvidePlugin({
            React: "react",
        }),
    ],
});

// export const setupStaticServing = () => ({
//     plugins: [
//         new CopyWebpackPlugin([
//             {
//                 from: `${STATIC}/CI/now.json`,
//                 to:   `${BUILD}/now.json`,
//             },
//         ]),
//     ],
// });
