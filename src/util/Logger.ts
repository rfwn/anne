import { ILogObject, Logger as tsLog } from "tslog";
import ErrorTransmitter from "./ErrorTransmitter";
const Logger: tsLog = new tsLog({
    exposeErrorCodeFrameLinesBeforeAndAfter: 3,
    dateTimeTimezone: "Asia/Tehran",
    ignoreStackLevels: 3,
    overwriteConsole: false,
    displayFunctionName: false,
    displayFilePath: 'hidden',
});

Logger.attachTransport(
    {
        warn: ErrorTransmitter.handleWarn,
        silly: () => { },
        trace: () => { },
        debug: () => { },
        info: () => { },
        error: ErrorTransmitter.handleError,
        fatal: () => { },
    },
    "debug"
);

export default Logger;