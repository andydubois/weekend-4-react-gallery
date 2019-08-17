CREATE TABLE photos (
    id SERIAL PRIMARY KEY,
    path VARCHAR (300),
	description VARCHAR (300),
	title VARCHAR (100),
	likes INTEGER 
);