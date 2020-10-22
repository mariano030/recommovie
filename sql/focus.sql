DROP TABLE IF EXISTS focus CASCADE;



CREATE TABLE focus(
    id SERIAL PRIMARY KEY,
    genre VARCHAR(255),
    aspects INT REFERENCES aspects(id),
    department VARCHAR(255),
    artist INT,
    contact INT []
);


-- REFERENCES recs(id)
-- INSERT into focus (recId, aspects, department)
-- values (1, 3,'Screenwriting');

-- select * from focus;