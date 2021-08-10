// Core
// import { ContextReplacementPlugin, Configuration } from "webpack";
import { Configuration }      from "webpack";
import TerserPlugin           from "terser-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
// import LodashModuleReplacementPlugin               from "lodash-webpack-plugin";

export const optimizeBuild = (): Configuration => ({
    // https://webpack.js.org/configuration/optimization
    optimization: {
        nodeEnv:     "production",
        minimize:    true,
        minimizer:   [ new TerserPlugin({ parallel: true }) ],
        // // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptio
        // // If you use Circle CI or any other environment that doesn't provide real available count of CPUs then you need to setup explicitly number of CPUs
        // https://webpack.js.org/plugins/split-chunks-plugin/
        splitChunks: {
            automaticNameDelimiter: "~",
            chunks:                 "all",
            minSize:                30000, // bytes
            // maxSize:                0,
            minChunks:              1,
            maxAsyncRequests:       5,
            maxInitialRequests:     3,
            name:                   false,
            cacheGroups:            {
                vendors: {
                    test:     /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
                default: {
                    minChunks:          2,
                    priority:           -20,
                    reuseExistingChunk: true,
                },
            },
        },
        runtimeChunk:           true,
        emitOnErrors:           false,
        moduleIds:              "size",
        chunkIds:               "size",
        mangleWasmImports:      true,
        removeAvailableModules: true,
        removeEmptyChunks:      true,
        mergeDuplicateChunks:   true,
        providedExports:        true,
        usedExports:            true,
        concatenateModules:     true,
        sideEffects:            true,
    },
});

export const cleanDirectories = (): Configuration => ({
    plugins: [
        new CleanWebpackPlugin({
            verbose: true,
        }),
    ],
});

// export const filterMomentLocales = (): Configuration => ({
//     plugins: [ new ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb|ru/) ],
// });

// export const filterLodashModules = () => ({
//     plugins: [
//         new LodashModuleReplacementPlugin({
//             collections: true,
//         }),
//     ],
// });
