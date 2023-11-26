import User from "../models/User.js";
import * as factory from "./handleFactory.js";

export const createUserTable = (connection) => {
    return factory.createTable(connection, User);
};
