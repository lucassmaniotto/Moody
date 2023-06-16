CREATE DATABASE Moody;

CREATE TABLE moods (
    acronym VARCHAR(2) PRIMARY KEY NOT NULL,
    name VARCHAR(10) NOT NULL
)

INSERT INTO moods (acronym, name) VALUES
('AN', 'Com raiva'),
('CA', 'Calmo'),
('CO', 'Confuso'),
('FR', 'Com medo'),
('HE', 'Feliz'),
('NE', 'Neutro'),
('SA', 'Triste'),
('SU', 'Surpreso');

CREATE TABLE mood_register (
    id INT NOT NULL,
    acronym VARCHAR(2) NOT NULL,
    description VARCHAR(200),
    date varchar(30) NOT NULL,
    CONSTRAINT pk_mood_register_id PRIMARY KEY (id),
    CONSTRAINT fk_mood_register_moods FOREIGN KEY (acronym) REFERENCES moods(acronym)
)