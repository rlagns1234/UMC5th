class Review {
    constructor(connection) {
        this.connection = connection;
    }

    async createTable() {
        try {
            await this.connection.execute(`
                CREATE TABLE IF NOT EXISTS review (
                    reviewPk BIGINT PRIMARY KEY,
                    FOREIGN KEY (userPK) REFERENCES user(userPK),
                    FOREIGN KEY (regionPk) REFERENCES region(regionPk),
                    content TEXT,
                    score DOUBLE,
                    created_at DATETIME(6)
                )
            `);
            console.log("Review table created or already exists.");
        } catch (err) {
            console.error("Error creating Review table:", err);
            throw err;
        }
    }
}

export default Review;