DROP TABLE IF EXISTS recipients CASCADE;

CREATE TABLE recipients(
    id SERIAL PRIMARY KEY,
    recipientname VARCHAR(255)
);  

select * from recipients;