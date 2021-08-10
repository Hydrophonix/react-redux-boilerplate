// // Core
// import { Configuration }  from "webpack";
// import WebpackPwaManifest from "webpack-pwa-manifest";
// import { GenerateSW }     from "workbox-webpack-plugin";
// import path               from "path";

// export const loadPWAManifest = (): Configuration => ({
//     plugins: [
//         new WebpackPwaManifest({
//             name:             "HydroPortfolio",
//             short_name:       "Hydro",
//             description:      "HydroPortfolio PWA",
//             display:          "standalone",
//             background_color: "#ffffff",
//             theme_color:      "#f2f2",
//             crossorigin:      "use-credentials", //can be null, use-credentials or anonymous
//             icons:
//                 {
//                     src:   path.join(__dirname, "../../../src/assets/icons/appIcon512.png"),
//                     sizes: [ 96, 128, 192, 256, 384, 512 ], // multiple sizes
//                 },
//             //   {
//             //     src: path.resolve('src/assets/large-icon.png'),
//             //     size: '1024x1024' // you can also use the specifications pattern
//             //   },
//             //   {
//             //     src: path.resolve('src/assets/maskable-icon.png'),
//             //     size: '1024x1024',
//             //     purpose: 'maskable'
//             //   }
//         }),
//     ],
// });

// export const loadPWAServiceWorker = (): Configuration => ({
//     plugins: [
//         new GenerateSW({
//             clientsClaim:     true,
//             skipWaiting:      true,
//             navigateFallback: "/index.html",
//             // mode: ''
//         }),
//     ],
// });
