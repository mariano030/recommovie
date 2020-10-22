DROP TABLE IF EXISTS aspects CASCADE;

CREATE TABLE aspects(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    icon VARCHAR(255)
);

INSERT into aspects(name, icon)
values (2, 'Art Design','design');

INSERT into aspects(name,icon)
values (3,'Costumes','costumes');

INSERT into aspects(name,icon)
values (4, 'Characters','caracters');

INSERT into aspects(name,icon)
values ('Story','story');

INSERT into aspects(name,icon)
values ('Screenplay','script');

INSERT into aspects(name,icon)
values ('Dialogue','dialogue');

INSERT into aspects(name,icon)
values ('Editing','editing');

INSERT into aspects (id,name, icon)
values (1, 'Color','color');

INSERT into aspects(name,icon)
values ('Mood','mood');

INSERT into aspects(name,icon)
values ('Pacing');

INSERT into aspects(name,icon)
values ('Staging/Blocking','blocking');

INSERT into aspects(name,icon)
values ('Lighting','lighting');

INSERT into aspects(name,icon)
values ('Music','music');

INSERT into aspects(name,icon)
values ('Sounddesign','sound');

INSERT into aspects(name,icon)
values ('Cinematography','camera');

INSERT into aspects(name,icon)
values ('Suspense');

INSERT into aspects(name,icon)
values ('Special Effects','sfx');

INSERT into aspects(name,icon)
values ('Visual Effects','vfx');

INSERT into aspects(name,icon)
values ('Mis en Scène','miseenscene');

INSERT into aspects(name,icon)
values ('Characters','characters');

select * from aspects;