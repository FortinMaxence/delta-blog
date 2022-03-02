DROP TABLE IF EXISTS articles;

CREATE TABLE articles (
  id BIGINT AUTO_INCREMENT  PRIMARY KEY,
  title VARCHAR(250) NOT NULL,
  category VARCHAR(250) NOT NULL,
  author VARCHAR(250) NOT NULL,
  creationdate VARCHAR(250) NOT NULL,
  creationhour VARCHAR(250) NOT NULL,
  content VARCHAR(250) NOT NULL
);

INSERT INTO articles (title, category, author, creationdate, creationhour, content) VALUES
  ('Un premier article', 'Divers', 'Maxence FORTIN', '01/03/2022', '14:02', 'Bonjour à tous ! Ceci est le premier article de ce blog réalisé par Paul BODIN et Maxence FORTIN !
  Bonne découverte !'),
  ('Un second !', 'Géopolitique', 'Paul BODIN', '28/01/2022', '09:15', 'Bonjour à tous, Aujourd hui je souhaite introduire une nouvelle catégorie sur ce blog : la géopolitique !');
