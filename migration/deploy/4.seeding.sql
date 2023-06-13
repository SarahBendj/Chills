-- Deploy cuisto:2.seeding to pg

BEGIN;

INSERT INTO discount("name", "sale") VALUES 
    ('relax10', 15),
    ('mode15', 5),
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

INSERT INTO body_zone("name") VALUES 
('face'),
('arms'),
('head'),
('hair'),
('back'),
('all body'),
('thighs'),
('hands'),
('feet'),
('chest & belly'),
('legs');


INSERT INTO category ("name" , "img") VALUES 
('SAUNA & HAMMAM','https://images.pexels.com/photos/8284382/pexels-photo-8284382.jpeg' ),
('MASSAGE' ,'https://images.pexels.com/photos/3997994/pexels-photo-3997994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
('BODY CARE','https://images.pexels.com/photos/4155011/pexels-photo-4155011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
('RELAX THERAPY' , 'https://images.pexels.com/photos/6663365/pexels-photo-6663365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
('BATHING' ,'https://images.pexels.com/photos/3865748/pexels-photo-3865748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
('Nurrish' ,'https://images.pexels.com/photos/6683042/pexels-photo-6683042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
('Nails' , 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');

INSERT INTO services ("name", "description","price","category_id") VALUES
 ('Smooth', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tellus in dui eleifend tincidunt. Aliquam aliquam varius mi, vel blandit enim lacinia sit amet. Mauris dignissim urna at nisi pharetra, at iaculis massa consequat. Morbi gravida nisi eu erat dapibus, nec consectetur lacus ullamcorper. Donec vitae nisi eu',69,1),
 ('Herbal Medicine', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tellus in dui eleifend tincidunt. Aliquam aliquam varius mi, vel blandit enim lacinia sit amet. Mauris dignissim urna at nisi pharetra, at iaculis massa consequat. Morbi gravida nisi eu erat dapibus, nec consectetur lacus ullamcorper. Donec vitae nisi eu',99,4),
 ('Instant relax', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tellus in dui eleifend tincidunt. Aliquam aliquam varius mi, vel blandit enim lacinia sit amet. Mauris dignissim urna at nisi pharetra, at iaculis massa consequat. Morbi gravida nisi eu erat dapibus, nec consectetur lacus ullamcorper. Donec vitae nisi eu',69,1),
 ('Healthy time', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tellus in dui eleifend tincidunt. Aliquam aliquam varius mi, vel blandit enim lacinia sit amet. Mauris dignissim urna at nisi pharetra, at iaculis massa consequat. Morbi gravida nisi eu erat dapibus, nec consectetur lacus ullamcorper. Donec vitae nisi eu',99,3),
 ('Vitamin me', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tellus in dui eleifend tincidunt. Aliquam aliquam varius mi, vel blandit enim lacinia sit amet. Mauris dignissim urna at nisi pharetra, at iaculis massa consequat. Morbi gravida nisi eu erat dapibus, nec consectetur lacus ullamcorper. Donec vitae nisi eu',299,4),
 ('Peaceful moment', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tellus in dui eleifend tincidunt. Aliquam aliquam varius mi, vel blandit enim lacinia sit amet. Mauris dignissim urna at nisi pharetra, at iaculis massa consequat. Morbi gravida nisi eu erat dapibus, nec consectetur lacus ullamcorper. Donec vitae nisi eu',69,5),
 ('nurrish & heal', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tellus in dui eleifend tincidunt. Aliquam aliquam varius mi, vel blandit enim lacinia sit amet. Mauris dignissim urna at nisi pharetra, at iaculis massa consequat. Morbi gravida nisi eu erat dapibus, nec consectetur lacus ullamcorper. Donec vitae nisi eu',99,5),
 ('Hydrated body', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tellus in dui eleifend tincidunt. Aliquam aliquam varius mi, vel blandit enim lacinia sit amet. Mauris dignissim urna at nisi pharetra, at iaculis massa consequat. Morbi gravida nisi eu erat dapibus, nec consectetur lacus ullamcorper. Donec vitae nisi eu',299,5),
 ('Ultimate body', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tellus in dui eleifend tincidunt. Aliquam aliquam varius mi, vel blandit enim lacinia sit amet. Mauris dignissim urna at nisi pharetra, at iaculis massa consequat. Morbi gravida nisi eu erat dapibus, nec consectetur lacus ullamcorper. Donec vitae nisi eu',399,3),
 ('Divine hands', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tellus in dui eleifend tincidunt. Aliquam aliquam varius mi, vel blandit enim lacinia sit amet. Mauris dignissim urna at nisi pharetra, at iaculis massa consequat. Morbi gravida nisi eu erat dapibus, nec consectetur lacus ullamcorper. Donec vitae nisi eu',399,7),
 ('Toned', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tellus in dui eleifend tincidunt. Aliquam aliquam varius mi, vel blandit enim lacinia sit amet. Mauris dignissim urna at nisi pharetra, at iaculis massa consequat. Morbi gravida nisi eu erat dapibus, nec consectetur lacus ullamcorper. Donec vitae nisi eu',299,6),
 ('Hotty bath', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tellus in dui eleifend tincidunt. Aliquam aliquam varius mi, vel blandit enim lacinia sit amet. Mauris dignissim urna at nisi pharetra, at iaculis massa consequat. Morbi gravida nisi eu erat dapibus, nec consectetur lacus ullamcorper. Donec vitae nisi eu',399,1),
 ('Acupuncture', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tellus in dui eleifend tincidunt. Aliquam aliquam varius mi, vel blandit enim lacinia sit amet. Mauris dignissim urna at nisi pharetra, at iaculis massa consequat. Morbi gravida nisi eu erat dapibus, nec consectetur lacus ullamcorper. Donec vitae nisi eu',399,4),
 ('Medical massage', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tellus in dui eleifend tincidunt. Aliquam aliquam varius mi, vel blandit enim lacinia sit amet. Mauris dignissim urna at nisi pharetra, at iaculis massa consequat. Morbi gravida nisi eu erat dapibus, nec consectetur lacus ullamcorper. Donec vitae nisi eu',99,2),
 ('Classic massage', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tellus in dui eleifend tincidunt. Aliquam aliquam varius mi, vel blandit enim lacinia sit amet. Mauris dignissim urna at nisi pharetra, at iaculis massa consequat. Morbi gravida nisi eu erat dapibus, nec consectetur lacus ullamcorper. Donec vitae nisi eu',299,2);
  
  

INSERT INTO app_user ("firstname", "lastname", "password", "email", "identificant", "role" )VALUES
    ('Nicolas', 'foaster','$2a$05$mxu3x9Az/bY4d5gl93pa2u1Guo1fGSMv6.p1Zn3dBZrgeQ47W6oqe', 'nico@cuisto.fr', 'foaster1542', 'member'),
    ('Léo', 'marron','$2a$05$mxu3x9Az/bY4d5gl93pa2u1Guo1fGSMv6.p1Zn3dBZrgeQ47W6oqe', 'leo@cuisto.fr', 'marron1542',  'member'),
    ('Sandra', 'delaire','$2a$05$mxu3x9Az/bY4d5gl93pa2u1Guo1fGSMv6.p1Zn3dBZrgeQ47W6oqe', 'sandra@cuisto.fr', 'delaire1542', 'member'),
    ('Philippe', 'Etchebest','$2a$05$mxu3x9Az/bY4d5gl93pa2u1Guo1fGSMv6.p1Zn3dBZrgeQ47W6oqe', 'philou@cuisto.fr', 'Etchebest4024',  'admin');



COMMIT;
