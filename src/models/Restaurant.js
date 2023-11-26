class Restaurant {
    constructor(connection) {
        this.connection = connection;
    }

    async createTable() {
        try {
            await this.connection.execute(`
                CREATE TABLE IF NOT EXISTS restaurant (
                    missionPk BIGINT PRIMARY KEY,
                    FOREIGN KEY (restaurantPK) REFERENCES restaurant(restaurantPK),
                    completed INT,
                    goalPrice INT,
                    presentPrice INT,
                    created_at DATETIME(6),
                    updated_at DATETIME(6),
                    rewardpoint INT
                )
            `);
            console.log("Restaurant table created or already exists.");
        } catch (err) {
            console.error("Error creating Restaurant table:", err);
            throw err;
        }
    }
}

export default Restaurant;