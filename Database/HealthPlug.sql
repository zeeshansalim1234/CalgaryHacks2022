DROP DATABASE IF EXISTS CH22;
CREATE DATABASE CH22; 
USE CH22;

DROP TABLE IF EXISTS USERCREDENTIALS;
CREATE TABLE USERCREDENTIALS (
	userName			varchar(25) not null,
    email			    varchar(255) not null,
    firstName			char(25) not null,
    lastName			char(25) not null,
    phoneNumber			varchar(13) not null,
    password			varchar(25) not null,
    primary key (username)
);

INSERT INTO USERCREDENTIALS (email, firstName, lastName, phoneNumber, userName, password)
VALUES
('num4n',          'numan@gmail.com',		 'Mohamed', 	'Numan',	'236-145-2542',		'Numan1234'),
('nickknapton',    'nicholas@yahoo.com',	 'Nicholas', 	'Knapton',	'587-890-4387',		'software1234'),
('zeeshansalim',   'zeeshan@outlook.com',	 'Zeeshan', 	'Chougle',	'705-667-9481',		'code3211'),
('sarthaksharan',  'sharan@tesla.com',		 'Sarthak', 	'Sharan',   '306-512-5508',		'qwerty123'),
('rishabh',        'rishabh@amazon.com',     'Rishabh', 	'Ruhela',	'403-980-9876',		'password23');