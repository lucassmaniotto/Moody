INSERT INTO -- A senha do usuário teste é "123@123"
  users (name, email, password)
VALUES
  ('Robert Smith', 'the.cure@gmail.com', '$2b$10$5tDfFtlcZa3vwKe8Y1c2jeOMFBh2hAWLIJgv./brEYxNVvfx.2H7a');

INSERT INTO moods (acronym, name) VALUES
('AN', 'Com raiva'),
('CA', 'Calmo'),
('CO', 'Confuso'),
('FR', 'Com medo'),
('HE', 'Feliz'),
('NE', 'Neutro'),
('SA', 'Triste'),
('SU', 'Surpreso');

INSERT INTO mood_record (id, user_id, acronym, description, date)
VALUES
  (1, 1, 'NE', 'I don''t care if Monday''s blue', 'Mon, 19 Jun 2023 19:38:57 GMT'),
  (2, 1, 'SA', 'Tuesday''s grey and Wednesday too', 'Mon, 19 Jun 2023 19:39:07 GMT'),
  (3, 1, 'AN', 'Thursday, I don''t care about you', 'Mon, 19 Jun 2023 19:39:19 GMT'),
  (4, 1, 'HE', 'It''s Friday, I''m in love', 'Mon, 19 Jun 2023 19:39:28 GMT'),
  (5, 1, 'SU', 'Monday you can fall apart', 'Mon, 19 Jun 2023 19:40:54 GMT'),
  (6, 1, 'FR', 'Tuesday, Wednesday break my heart', 'Mon, 19 Jun 2023 19:41:31 GMT'),
  (7, 1, 'CO', 'Oh, Thursday doesn''t even start', 'Mon, 19 Jun 2023 19:41:53 GMT'),
  (8, 1, 'CA', 'It''s Friday, I''m in love', 'Mon, 19 Jun 2023 19:42:12 GMT');

SELECT * FROM users;
SELECT * FROM moods;
SELECT * FROM mood_record;