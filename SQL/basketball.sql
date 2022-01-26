
create table team(
	t_id serial primary key,
	name varchar(100),
	hometown varchar(100),
	mascot varchar(100)
);

insert into team values (default,'Grand Dunk Railroad', 'Funky Town','The Conductor');
insert into team values (default,'Galaxy Dunker', 'Cosmos','Milky Way');
insert into team values (default,'The Goon Squad', 'Planet Basketball','Evil Lebron James');

select * from team;
-- How to add players to my Database
-- Embed: column that is a list of platers

-- Normalize: another table that will refernce the team table, (sql will very much push you to noramlize)

create table player(
	p_id serial primary key,
	first_name varchar(100),
	last_name varchar(100),
	salary int,
	team_id int references team(t_id) -- reference the team that the player is on team_id always has valid value to team id
	-- refernces is a shorthand syntax for foreign key
);

insert  into player values(default, 'Adam', 'Ranieri', 1000000, 2);
insert  into player values(default, 'Ryan', 'Schlientz', 500000, 2);

insert  into player values(default, 'Sierra', 'Nicholes', 1000000, 1);
insert  into player values(default, 'Richard', 'Orr', 900000, 4);
insert  into player values(default, 'Steven', 'McImpoverished', 2, 40);

select * from player;


-- joins are operations that DENORMALIZE a database by combining two tables
-- left join any records in the left table will be attached to any matching records on the right table
-- Any select statement or join returns a View a virtual table which is computed rather than actually persisted
select * from      player left join team on player.team_id = team.t_id;
select * from      team inner join player on player.team_id = team.t_id;
-- select * from team cross join player;

-- what hometown does Ryan Play in
select hometown from player left join team on player.team_id = team.t_id where first_name = 'Ryan';


-- Orphan records are a problem in relational database design 
-- You have a record that references a non-existent record
-- foreign keys prevent orphan records by enforcing that the column referencing another table is a valid value

drop table player;
