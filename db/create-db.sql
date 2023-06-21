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

CREATE TABLE mood_record (
    id INT NOT NULL,
    acronym VARCHAR(2) NOT NULL,
    description VARCHAR(150) NOT NULL,
    date varchar(30) NOT NULL,
    CONSTRAINT pk_mood_record_id PRIMARY KEY (id),
    CONSTRAINT fk_mood_record_moods FOREIGN KEY (acronym) REFERENCES moods(acronym)
)

INSERT INTO mood_record (id, acronym, description, date)
VALUES
  (1, 'NE', 'I don''t care if Monday''s blue', 'Mon, 19 Jun 2023 19:38:57 GMT'),
  (2, 'SA', 'Tuesday''s grey and Wednesday too', 'Mon, 19 Jun 2023 19:39:07 GMT'),
  (3, 'AN', 'Thursday, I don''t care about you', 'Mon, 19 Jun 2023 19:39:19 GMT'),
  (4, 'HE', 'It''s Friday, I''m in love', 'Mon, 19 Jun 2023 19:39:28 GMT'),
  (5, 'SU', 'Monday you can fall apart', 'Mon, 19 Jun 2023 19:40:54 GMT'),
  (6, 'FR', 'Tuesday, Wednesday break my heart', 'Mon, 19 Jun 2023 19:41:31 GMT'),
  (7, 'CO', 'Oh, Thursday doesn''t even start', 'Mon, 19 Jun 2023 19:41:53 GMT'),
  (8, 'CA', 'It''s Friday, I''m in love', 'Mon, 19 Jun 2023 19:42:12 GMT');

SELECT * FROM moods;

SELECT * FROM mood_record;
