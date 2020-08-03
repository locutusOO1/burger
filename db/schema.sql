drop database if exists burgers_db;

create database burgers_db;

use burgers_db;

create table burgers (
    id integer not null auto_increment,
    burger_name varchar(50) not null,
    devoured boolean not null default false,
    primary key (id)
);

/*
create table burgers (
    id integer not null auto_increment,
    burger_name varchar(50) not null,
    devoured boolean not null default false,
    createdAt timestamp not null default current_timestamp,
    primary key (id)
);
*/