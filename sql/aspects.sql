DROP TABLE IF EXISTS aspects CASCADE;

CREATE TABLE aspects(
    id SERIAL PRIMARY KEY,
    aspect VARCHAR(255)
);

INSERT into aspects (id, aspect)
values (1, 'Color');

INSERT into aspects (aspect)
values (2, 'Art Design');

INSERT into aspects (aspect)
values (3,'Costumes');

INSERT into aspects (aspect)
values (4, 'Characters');

INSERT into aspects (aspect)
values ('Story');

INSERT into aspects (aspect)
values ('Screenplay');

INSERT into aspects (aspect)
values ('Dialogue');

INSERT into aspects (aspect)
values ('Editing');

INSERT into aspects (aspect)
values ('Mood');

INSERT into aspects (aspect)
values ('Pacing');

INSERT into aspects (aspect)
values ('Staging/Blocking');

INSERT into aspects (aspect)
values ('Lighting');

INSERT into aspects (aspect)
values ('Music');

INSERT into aspects (aspect)
values ('Sounddesign');

INSERT into aspects (aspect)
values ('Cinematography');

INSERT into aspects (aspect)
values ('Suspense');

INSERT into aspects (aspect)
values ('Special Effects');

INSERT into aspects (aspect)
values ('Visual Effects');

select * from aspects;