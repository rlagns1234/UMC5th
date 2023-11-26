class User {
    constructor(connection) {
        this.connection = connection;
    }

    async createTable() {
        try {
            await this.connection.execute(`
                CREATE TABLE IF NOT EXISTS user (
                    userPK BIGINT PRIMARY KEY,
                    id TEXT,
                    name TEXT,
                    pw TEXT,
                    gender INT,
                    address VARCHAR(50),
                    point INT,
                    created_at DATETIME(6),
                    updated_at DATETIME(6),
                    profileImg TEXT,
                    phoneNumber INT,
                    eMail TEXT
                )
            `);
            console.log("User table created or already exists.");
        } catch (err) {
            console.error("Error creating User table:", err);
            throw err;
        }
    }
}

export default User;