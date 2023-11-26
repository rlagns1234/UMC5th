import Review from "../models/Review.js";
import * as factory from "./handleFactory.js";

export const createReviewTable = (connection) => {
    return factory.createTable(connection, Review);
};
