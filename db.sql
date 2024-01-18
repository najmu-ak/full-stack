CREATE DATABASE testdb;
USE DATABASE testdb;

-- CREATE TABLE teacher (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   name VARCHAR(100) NOT NULL,
--   address VARCHAR(255) ,
--   phone VARCHAR(15) ,
--   subject VARCHAR(100),
--   salary DECIMAL(10, 2) 
-- );

-- CREATE TABLE user( 
--     email VARCHAR(100),
--     password VARCHAR(20),

-- );

-- CREATE TABLE student( 
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     name VARCHAR(100) NOT NULL,
--     age INT
-- );

-- INSERT INTO teacher (name, address, phone, subject, salary)
-- VALUES
--   ('APM', '123 Main St', '123-456-7890', 'Math', 5000),
--   ('Elbert', '456 Elm St', '987-654-3210', 'English', 4500),
--   ('Gulam', '789 Oak St', '555-555-5555', 'Science', 4800);

-- SELECT name,salary FROM teacher where salary = 4500;

-- SELECT * from user where email = "nor@gmail" and password = "heof"


-- UPDATE `school`.`teacher` SET `phone`='123-456-789' WHERE  `id`=1;

create table person(name VARCHAR(10),skill VARCHAR(10),age INTEGER(2));
insert into person values('&name','&skill','&age');
-- ('Najmudeen','Teaching',20),
-- ('Ajith', 'racer', 49),
-- ('ali', 'typing', 22),
-- ('siva', 'writer', 17),
-- ('vijay', 'acting', 50),
-- ('john', 'driver', 30),
-- ('messi', 'football', 36),
-- ('neymer', 'football', 36);
-- SELECT * from school.person;

-- INSERT INTO `school`.`person` (`name`, `skill`, `age`) VALUES ('leo', 'movie', 2);

INSERT INTO `school`.`person` (`name`, `skill`, `age`) VALUES ('leo', 'movie', 30);
