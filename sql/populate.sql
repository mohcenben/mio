
INSERT INTO Provinces (provinceId, provinceName) 
VALUES
  (1, 'Sevilla');

INSERT INTO Municipalities (municipalityId, provinceId, municipalityName) 
VALUES
  (1, 1, 'Los Palacios y Villafranca');

INSERT INTO PostCodes (postcodeId, municipalityId, postcode) 
VALUES
  (1, 1, '41720');

INSERT INTO Users (userId, fullname, username, email, photoProfile, passwd, dateOfBirth, registrationDate, withdrawalDate, gender, hairColor, eyeColor, height, wheight, bio, adress, provinceId, municipalityId, postcodeId)
VALUES
	(1, 'Jessica Hawkins', 'jessicahawkins95', 'jessicahawkins95@gmail.com', 'images/Jessica-Hawkins.jpg', 'pbkdf2:sha256:150000$MjN72ikE$897d960e08be9150d943c747ff6194904fd325821945ff7d7f5c1d1d08b40bbd', 
   '1995-02-18', '2023-03-14 15:30', default, 'mujer', 'rubio', 'marrones', 160, 56, 'Piloto de automovilismo y especialista de cine británica', 'Diego Llorente, 26', 1, 1, 1);

INSERT INTO Pictures(pictureId, name, description, pictureURL, userId, photoAvatar, date)
VALUES
  (1, 'Focus', '', 'images/JessicaHawkins3.jpg', 1,'images/Jessica-Hawkins.jpg', '2023-03-16 15:30' ),
  (2, 'Race Week!!', '', 'images/JessicaHawkins4.jpg', 1, 'images/Jessica-Hawkins.jpg', '2023-04-18 10:25'),
  (3, 'Ready for the new season!!', '', 'images/JessicaHawkins2.jpg', 1, 'images/Jessica-Hawkins.jpg', '2023-05-11 16:15');


INSERT INTO Hobbies(hobbyId, name)
VALUES
  (1, 'Automovilismo');