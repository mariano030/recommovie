DROP TABLE IF EXISTS senders CASCADE;

CREATE TABLE senders(
    id SERIAL PRIMARY KEY,
    sendername VARCHAR(255),
);  

select * from senders;