-- Deploy cuisto:2.seeding to pg

BEGIN;

INSERT INTO discount("name", "sale") VALUES 
    ('relaxstaff', 15),
    ('Eymric', 5),
    ('flan', 15);

INSERT INTO header("name") VALUES 
   
    ('Services'),
    ('Main'),
    ('Appointement'),
    ('Login'),
    ('Sign in');
    

INSERT INTO periods("name", "contact") VALUES
    ('Pomoni', 'pomoni@outlook.com'),
    ('Charculard', 'charculard@outlook.com'),
    ('CapOcean', 'capocean@outlook.com');

INSERT INTO extra ("name" ,"price") VALUES 
    ('Skin care', 15),
    ('Healthy hair', 10),
    ('Whiten teeth', 10),
    ('part body massage', 12),
    ('All body massage', 30);

INSERT INTO technic("name") VALUES 
('water therapy'),
('sand therap'),
('just oil');



INSERT INTO services ("name", "description","price","img") VALUES
 ('Instant relax', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tellus in dui eleifend tincidunt. Aliquam aliquam varius mi, vel blandit enim lacinia sit amet. Mauris dignissim urna at nisi pharetra, at iaculis massa consequat. Morbi gravida nisi eu erat dapibus, nec consectetur lacus ullamcorper. Donec vitae nisi eu',69, 'https://cdn.pixabay.com/photo/2023/05/19/10/15/parrot-8004146_1280.jpg'),
 ('Day relax', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tellus in dui eleifend tincidunt. Aliquam aliquam varius mi, vel blandit enim lacinia sit amet. Mauris dignissim urna at nisi pharetra, at iaculis massa consequat. Morbi gravida nisi eu erat dapibus, nec consectetur lacus ullamcorper. Donec vitae nisi eu',99,'https://cdn.pixabay.com/photo/2022/09/02/13/02/boho-7427541_1280.jpg'),
 ('Week relax', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tellus in dui eleifend tincidunt. Aliquam aliquam varius mi, vel blandit enim lacinia sit amet. Mauris dignissim urna at nisi pharetra, at iaculis massa consequat. Morbi gravida nisi eu erat dapibus, nec consectetur lacus ullamcorper. Donec vitae nisi eu',299,'https://cdn.pixabay.com/photo/2022/09/02/13/02/boho-7427541_1280.jpg');

  

INSERT INTO app_user ("firstname", "lastname", "password", "email", "identificant", "role" )VALUES
    ('Nicolas', 'foaster','$2a$05$mxu3x9Az/bY4d5gl93pa2u1Guo1fGSMv6.p1Zn3dBZrgeQ47W6oqe', 'nico@cuisto.fr', 'foaster1542', 'member'),
    ('Léo', 'marron','$2a$05$mxu3x9Az/bY4d5gl93pa2u1Guo1fGSMv6.p1Zn3dBZrgeQ47W6oqe', 'leo@cuisto.fr', 'marron1542',  'member'),
    ('Sandra', 'delaire','$2a$05$mxu3x9Az/bY4d5gl93pa2u1Guo1fGSMv6.p1Zn3dBZrgeQ47W6oqe', 'sandra@cuisto.fr', 'delaire1542', 'member'),
    ('Philippe', 'Etchebest','$2a$05$mxu3x9Az/bY4d5gl93pa2u1Guo1fGSMv6.p1Zn3dBZrgeQ47W6oqe', 'philou@cuisto.fr', 'Etchebest4024',  'admin');



COMMIT;
