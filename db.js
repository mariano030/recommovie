const { NearMeSharp } = require("@material-ui/icons");
const spicedPg = require("spiced-pg");

const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/recomovie"
);

/// example
// module.exports.createUser = (first, last, email, password) => {
//     const q = `
//     INSERT into users (first, last, email, password)
//         values ($1, $2, $3, $4)
//     RETURNING *`;
//     const params = [first, last, email, password];
//     return db.query(q, params);
// };

module.exports.createSender = (name) => {
    const q = `
    INSERT into senders (sendername)
        values ($1) 
    RETURNING id`;
    const params = [name];
    return db.query(q, params);
};
module.exports.createRecipient = (name) => {
    const q = `
    INSERT into recipients (recipientname)
        values ($1) 
    RETURNING id`;
    const params = [name];
    return db.query(q, params);
};

module.exports.getAspects = () => {
    const q = `
    SELECT * FROM aspects`;
    const params = [];
    return db.query(q, params);
};

module.exports.makeRec = (
    code,
    mediaType,
    mediaId,
    senderId,
    recipientid,
    aspects,
    message,
    extUrl
) => {
    const q = `
    INSERT into recs (code, mediaType, mediaId,senderId, recipientid,aspects, message, exturl)
                values ($1,$2,$3,$4,$5, $6, $7,$8)
                RETURNING id
    `;
    const params = [
        code,
        mediaType,
        mediaId,
        senderId,
        recipientid,
        aspects,
        message,
        extUrl,
    ];
    return db.query(q, params);
};

module.exports.setAspects = (recId, aspectId) => {
    const q = `
    INSERT into rec_aspects (recid, aspectid)
                values ($1,$2)
                RETURNING id
    `;
    const params = [recId, aspectId];
    return db.query(q, params);
};

module.exports.getRec = (code) => {
    const q = `
    SELECT * from recs 
    WHERE code = $1
    `;
    const params = [code];
    return db.query(q, params);
};

// `SELECT users.id, first, last, image_url, accepted
//     FROM friendships
//     JOIN users
//     ON (accepted = false AND recipient_id = $1 AND sender_id = users.id)
//     OR (accepted = true AND recipient_id = $1 AND sender_id = users.id)
//     OR (accepted = true AND sender_id = $1 AND recipient_id = users.id)`;
//  `
