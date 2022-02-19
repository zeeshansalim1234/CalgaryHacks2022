DROP DATABASE IF EXISTS CH22;
CREATE DATABASE CH22; 
USE CH22;

DROP TABLE IF EXISTS USERCREDENTIALS;
CREATE TABLE USERCREDENTIALS (
    emailAddress	    varchar(255) not null,
    fullName			char(25) not null,
    password			varchar(25) not null,
    primary key (username)
);

INSERT INTO USERCREDENTIALS (emailAddress, fullName, password)
VALUES
('numan@gmail.com',		 'Mohamed Numan', 'Numan1234'),
('nicholas@yahoo.com',	 'Nicholas Knapton', 'software1234'),
('zeeshan@outlook.com',	 'Zeeshan Salimm', 	'code3211'),
('sharan@tesla.com',		 'Sarthak Sharan', 'qwerty123'),
('rishabh@amazon.com',     'Rishabh Ruhela', 	'password23');

CREATE TABLE userStore(
	email varchar(25) not null,
    title varchar(255) not null,
    summary varchar(505) not null,
    url varchar(255) not null
);

INSERT INTO userStore(userName,title,summary,url)
VALUES
('numan@gmail.com','Get Fit QUICK! 10 Minute Beginners At Home Workout, No Equipment, Total Body Fitness with Dani','Get Fit Quick with Dani! This workout is great for complete beginners and includes 5 tips to help you get started on your fitnesss journey!
','https://www.youtube.com/watch?v=QG_jMMpZAHw'),
('numan@gmail.com','Three Quick Running Workouts to Get Fit Fast','When it comes to training, though, I like my workouts challenging, and as a mom, preferably quick. Here are three quick running workouts that will get you results fast. Of course, I’m not entirely off the hook when it comes to slow runs, as the 80/20 rule still applies. Meaning roughly 80 percent of my weekly mileage still needs to be done at conversational pace.','http://wendymiley.com/tag/workouts/'),
('numan@gmail.com','Physical Fitnesss','Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition, moderate-vigorous physical exercise,and sufficient rest along with a formal recovery plan.','https://en.wikipedia.org/wiki/Physical_fitness');
