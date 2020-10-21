DROP TABLE IF EXISTS recs CASCADE;

CREATE TABLE recs(
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL UNIQUE,
    mediaType VARCHAR(255) NOT NULL,
    mediaId INT NOT NULL,
    senderId  INT REFERENCES users(id) NOT NULL,
    recipientId INT REFERENCES users(id),
    imageType VARCHAR(255),
    customImage VARCHAR(255),
    focus INT REFERENCES focus(id),
    message VARCHAR(255),
    audioFile VARCHAR(255),
    trailer VARCHAR(255),
    location VARCHAR(255),
    extUrl VARCHAR(255),
    senderRating INT,
    recipientRating INT,
    -- onList VARCHAR(255) REFERENCES lists(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- SELECT * FROM recs;

-- imageType

--     mediaType e_mediaType,
--    imageType e_imageType,