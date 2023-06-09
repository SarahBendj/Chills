-- Deploy cuisto:1.create_tables to pg

BEGIN;

-- CREATION DE LA 1ere version du SCRIPT

CREATE TABLE  discount ( 
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name text not null,
    sale INT not null
);

CREATE TABLE  header ( 
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name text not null
    
);
CREATE TABLE  body_zone ( 
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name text not null
    
);
CREATE TABLE  category ( 
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    img text not null,
    name text not null
    
);


CREATE TABLE  services ( 
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name text not null,
    img text,
    description text not null,
    price INT not null,
    category_id int references category(id)
);

CREATE TABLE  periods ( 
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name text not null,
    contact text   
);

CREATE TABLE  app_user ( 
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    firstname text not null,
    lastname text not null,
    email text default '@cuisto.fr',
    password text default 'cuistoWZ',
    role varchar(10) default 'member',
    user_status boolean default 'true'
);

CREATE TABLE extra (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name  text not null,
    price int not null
   
);

CREATE TABLE technic (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name  text not null
    
);

CREATE TABLE  appointement ( 
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    discount_sale text,
    RDV_date TIMESTAMPTZ ,
    createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    description text default 'RAS',
    app_user_id int references app_user(id),
    body_zone_id int references body_zone(id),
    services_id  int references services(id),
    extra_id int references extra(id),
    technic_id  int references technic(id)
);


CREATE TABLE  appointement_history ( 
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    temperature text not null default 'Start',
    createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    appointement_id int references appointement(id),
    app_user_id int references app_user(id)
);




COMMIT;
