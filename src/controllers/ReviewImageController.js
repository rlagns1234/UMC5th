import ReviewImage from "../models/ReviewImage.js";
import * as factory from "./handleFactory.js";

export const createReviewImageTable = (connection) => {
    return factory.createTable(connection, ReviewImage);
};
