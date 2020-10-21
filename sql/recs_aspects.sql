DROP TABLE IF EXISTS rec_aspects CASCADE;

CREATE TABLE rec_aspects(
    id SERIAL PRIMARY KEY,
    recid int NOT NULL REFERENCES recs(id),
    aspectid int REFERENCES aspects(id) 
);

SELECT * FROM rec_aspects;