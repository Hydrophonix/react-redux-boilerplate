/* eslint-disable no-console */
// Core
import webpack        from "webpack";
import DevServer      from "webpack-dev-server";
import chalk          from "chalk";
import openBrowser    from "react-dev-utils/openBrowser";
import { choosePort } from "react-dev-utils/WebpackDevServerUtils";

// Config
import { getDevConfig } from "./config";

// Constants
import { HOST, PORT } from "./constants";

const compiler = webpack(getDevConfig());

(async () => {
    console.log(chalk.greenBright("Starting dev server ..."));

    try {
        const choosenPort = await choosePort(HOST, PORT);

        if (!choosenPort) {
            console.log(
                chalk.yellowBright("→ It's impossible to run the app :("),
            );

            return null;
        }

        const server = new DevServer(
            {
                host:               HOST,
                port:               choosenPort,
                historyApiFallback: true,
                hot:                true,
                client:             {
                    logging:  "none",
                    overlay:  true,
                    progress: true,
                },
            },
            compiler,
        );

        await server.start();

        console.log(
            `${chalk.greenBright(
                "→ Server listening on",
            )} ${chalk.blueBright(`http://${HOST}:${choosenPort}`)}`,
        );

        openBrowser(`http://${HOST}:${choosenPort}`);
    } catch (error) {
        console.log(chalk.redBright("→ Error!"));
        console.error(error.message || error);
    }
})();
