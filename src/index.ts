import { authStrategies } from "./auth/strategies";
import { HapiServer } from "./server"
import configs from './config';
import { database } from "./database";
import { engine } from "./engine";

const init = async() => {
    const config = configs();

    const _server = new HapiServer({
        port: (process.env.PORT || config.api.port),
        routes: {
            cors: {
                origin: [config.api.cors],
                additionalHeaders: config.api.headers
            }
        }
    });

    _server.config = config;

    await authStrategies(_server);

    await database(_server);

    await _server.start();

    await engine();
}

process.on("unhandledRejection", error => {
    console.log(`El servidor explotó hasta el infinito y más allá\n${error}`);
    process.exit(0);
})

init();