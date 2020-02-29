require('dotenv/config')

module.exports = {
    dialect: process.env.DIALECT,
    host: process.env.DBHOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
