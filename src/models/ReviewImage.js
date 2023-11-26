class ReviewImage {
    constructor(connection) {
        this.connection = connection;
    }

    async createTable() {
        try {
            await this.connection.execute(`
                CREATE TABLE IF NOT EXISTS reviewImage (
                    reviewImagePk BIGINT PRIMARY KEY,
                    FOREIGN KEY (reviewPk) REFERENCES review(reviewPk),
                    imageUrl TEXT
                )
            `);
            console.log("ReviewImage table created or already exists.");
        } catch (err) {
            console.error("Error creating ReviewImage table:", err);
            throw err;
        }
    }
}

export default ReviewImage;