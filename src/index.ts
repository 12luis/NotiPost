import { authStrategies } from "./auth/strategies";
import { HapiServer } from "./server"
import { database } from "./database";
import { engine } from "./engine";
import { Routes } from './routes';
import configs from './config/index'; 

const init = async() => {

    const _server = new HapiServer({
        port: (process.env.PORT || configs('port')),
        routes: {
            cors: {
                origin: configs('origin'),
                additionalHeaders: configs('additionalHeaders')
            }
        }
    });

    await authStrategies(_server);

    _server.route(Routes);

    await database(_server);

    await _server.start();
    console.log(`Server executing on PORT: ${process.env.PORT||configs('port')}`)
    await engine();
}

process.on("unhandledRejection", error => {
    console.log(`El servidor explotó hasta el infinito y más allá\n${error}`);
    process.exit(0);
})

init();