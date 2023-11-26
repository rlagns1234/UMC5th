import Restaurant from "../models/Restaurant.js";
import * as factory from "./handleFactory.js";

export const createRestaurantTable = (connection) => {
    return factory.createTable(connection, Restaurant);
};
