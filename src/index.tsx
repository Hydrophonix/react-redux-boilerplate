// Core
import { createRoot } from "react-dom/client";

// React App
import { Root } from "./containers/root";

const rootNode = document.getElementById("root");
const root = createRoot(rootNode!);

root.render(<Root />);

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
