DROP DATABASE IF EXISTS CH22;
CREATE DATABASE CH22; 
USE CH22;

DROP TABLE IF EXISTS USERCREDENTIALS;
CREATE TABLE USERCREDENTIALS (
	userName			varchar(25) not null,
    emailAddress	    varchar(255) not null,
    firstName			char(25) not null,
    lastName			char(25) not null,
    phoneNumber			varchar(13) not null,
    password			varchar(25) not null,
    primary key (username)
);

INSERT INTO USERCREDENTIALS (userName,emailAddress, firstName, lastName, phoneNumber,  password)
VALUES
('num4n',          'numan@gmail.com',		 'Mohamed', 	'Numan',	'236-145-2542',		'Numan1234'),
('nickknapton',    'nicholas@yahoo.com',	 'Nicholas', 	'Knapton',	'587-890-4387',		'software1234'),
('zeeshansalim',   'zeeshan@outlook.com',	 'Zeeshan', 	'Chougle',	'705-667-9481',		'code3211'),
('sarthaksharan',  'sharan@tesla.com',		 'Sarthak', 	'Sharan',   '306-512-5508',		'qwerty123'),
('rishabh',        'rishabh@amazon.com',     'Rishabh', 	'Ruhela',	'403-980-9876',		'password23');

CREATE TABLE userStore(
	userName varchar(25) not null,
    title varchar(255) not null,
    summary varchar(505) not null,
    url varchar(255) not null
);

INSERT INTO userStore(userName,title,summary,url)
VALUES
('num4n','Get Fit QUICK! 10 Minute Beginners At Home Workout, No Equipment, Total Body Fitness with Dani','Get Fit Quick with Dani! This workout is great for complete beginners and includes 5 tips to help you get started on your fitnesss journey!
','https://www.youtube.com/watch?v=QG_jMMpZAHw'),
('num4n','Three Quick Running Workouts to Get Fit Fast','When it comes to training, though, I like my workouts challenging, and as a mom, preferably quick. Here are three quick running workouts that will get you results fast. Of course, I’m not entirely off the hook when it comes to slow runs, as the 80/20 rule still applies. Meaning roughly 80 percent of my weekly mileage still needs to be done at conversational pace.','http://wendymiley.com/tag/workouts/'),
('num4n','Physical Fitnesss','Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition, moderate-vigorous physical exercise,and sufficient rest along with a formal recovery plan.','https://en.wikipedia.org/wiki/Physical_fitness');
