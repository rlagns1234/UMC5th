import Mission from "./../models/Mission.js";
import * as factory from "./handleFactory.js";

export const createMissionTable = (connection) => {
    return factory.createTable(connection, Mission);
};
