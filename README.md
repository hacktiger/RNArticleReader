# RNArticleReader


DB :
heroku pg:psql --app server-article-reader-api
\d : show table

CREATE TABLE category (
  id              SERIAL PRIMARY KEY,
  name            VARCHAR(100) NOT NULL
);



SELECT
 film.film_id,
 film.title,
 inventory_id
FROM
 film
LEFT JOIN inventory ON inventory.film_id = film.film_id
WHERE
 inventory.film_id IS NULL;


 SELECT
  categories.name
FROM
  articles_categories
LEFT JOIN 
  categories ON  articles_categories.id = categories.id 
WHERE
  articles_categories.articleid = 1

  
2
3
ALTER TABLE articles 
 ADD COLUMN title VARCHAR(100),

 ALTER TABLE articles ALTER COLUMN title SET DEFAULT 'Untitled'
