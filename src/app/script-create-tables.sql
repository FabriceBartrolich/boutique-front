CREATE TABLE "user" (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
first_name VARCHAR(255) NOT NULL, 
email VARCHAR(255) NOT NULL UNIQUE,
password CHAR(60) NOT NULL
);


CREATE TABLE genre (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL
);


CREATE TABLE product (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
price DECIMAL(10,2) NOT NULL,
quantity INT NOT NULL, 
user_id INT NOT NULL REFERENCES "user"(id),
genre_id INT NOT NULL REFERENCES genre(id)
);

