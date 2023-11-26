class Mission {
    constructor(connection) {
        this.connection = connection;
    }

    async createTable() {
        try {
            await this.connection.execute(`
                CREATE TABLE IF NOT EXISTS mission (
                    missionPk BIGINT PRIMARY KEY,
                    FOREIGN KEY (restaurantPK) REFERENCES restaurant(restaurantPK),
                    FOREIGN KEY (userPK) REFERENCES user(userPK),
                    completed INT,
                    goalPrice INT,
                    presentPrice INT,
                    created_at DATETIME(6),
                    updated_at DATETIME(6),
                    rewardpoint INT
                )
            `);
            console.log("Mission table created or already exists.");
        } catch (err) {
            console.error("Error creating Mission table:", err);
            throw err;
        }
    }
}

export default Mission;