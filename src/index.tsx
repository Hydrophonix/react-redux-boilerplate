// Core
import { render } from "react-dom";

// React App
import { Root } from "./containers/root";

const rootNode = document.getElementById("root");

render(<Root />, rootNode);

// if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
//     window.addEventListener("load", () => {
//         navigator.serviceWorker.register("/service-worker.js").then((registration) => {
//             console.log("SW registered: ", registration);
//         })
//             .catch((registrationError) => {
//                 console.log("SW registration failed: ", registrationError);
//             });
//     });
// }
