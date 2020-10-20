const spicedPg = require("spiced-pg");

const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/recomovie"
);

/// example
module.exports.createUser = (first, last, email, password) => {
    const q = `
    INSERT into users (first, last, email, password)
        values ($1, $2, $3, $4) 
    RETURNING *`;
    const params = [first, last, email, password];
    return db.query(q, params);
};

module.exports.getAspects = () => {
    const q = `
    SELECT * FROM aspects`;
    const params = [];
    return db.query(q, params);
};