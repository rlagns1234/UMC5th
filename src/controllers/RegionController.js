import Region from "./../models/Region.js";
import * as factory from "./handleFactory.js";

export const createRegionTable = (connection) => {
    return factory.createTable(connection, Region);
};
