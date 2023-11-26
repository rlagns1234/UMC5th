import mysql from "mysql2";
import app from "./app.js";
import dotenv from "dotenv";
import * as MissionController from "./src/controllers/MissionController.js";
import * as RegionController from "./src/controllers/RegionController.js";
import * as RestaurantController from "./src/controllers/RestaurantController.js";
import * as ReviewController from "./src/controllers/ReviewController.js";
import * as ReviewImageController from "./src/controllers/ReviewImageController.js";
import * as UserController from "./src/controllers/UserController.js";

dotenv.config({ path: "./.env" });

// Create a connection to the database
const dbConfig = {
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
};

// Connect to the database
const connectToDatabase = async () => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log("Connected to the database!");

        await MissionController.createMissionTable(connection);
        await RegionController.createRegionTable(connection);
        await RestaurantController.createRestaurantTable(connection);
        await ReviewController.createReviewTable(connection);
        await ReviewImageController.createReviewImageTable(connection);
        await UserController.createUserTable(connection);

      // You can perform database operations here using the 'connection' object

      // Don't forget to close the connection when done
        connection.end();
    } catch (err) {
        console.error("Error connecting to the database:", err);
    }
};

connectToDatabase();

const port = process.env.port || 3306;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
