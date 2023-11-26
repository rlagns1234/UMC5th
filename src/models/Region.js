class Region {
    constructor(connection) {
        this.connection = connection;
    }

    async createTable() {
        try {
            await this.connection.execute(`
                CREATE TABLE IF NOT EXISTS region (
                    regionPk BIGINT PRIMARY KEY,
                    name TEXT
                )
            `);
            console.log("Region table created or already exists.");
        } catch (err) {
            console.error("Error creating Region table:", err);
            throw err;
        }
    }
}

export default Region;