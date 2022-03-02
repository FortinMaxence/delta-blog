DROP TABLE IF EXISTS articles;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS category_article;
CREATE TABLE articles (
  id BIGINT AUTO_INCREMENT  PRIMARY KEY,
  title VARCHAR(250) NOT NULL,
  category VARCHAR(250) NOT NULL,
  author VARCHAR(250) NOT NULL,
  creationdate VARCHAR(250) NOT NULL,
  creationhour VARCHAR(250) NOT NULL,
  content VARCHAR(250) NOT NULL
);
CREATE TABLE categories (
  category_id BIGINT AUTO_INCREMENT  PRIMARY KEY,
  name VARCHAR(250) NOT NULL
);
CREATE TABLE category_article (
    category_id BIGINT NOT NULL,
    article_id BIGINT NOT NULL
);


INSERT INTO categories (name) VALUES
  ('Divers'),
  ('Géopolitique');