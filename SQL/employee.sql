-- SQL

create table employee (
	id serial primary key,
	first_name varchar(100) default 'No First name',
	last_name varchar(100) not null,
	salary int check (salary > 0)
);

drop table employee;

-- Creation
insert into employee values (default,'Adam','Ranieri',300000);
insert into employee values (default,'Ryan','Schlientz',200000);
insert into employee values (default,'Steven','McImpoverished',1);

-- Read
-- select "columns" from "table"
select * from employee;
select first_name, last_name from employee;

-- The where clause is a filter determing what records are returned. NOT the data from a record
select * from employee where salary > 500;
select last_name from employee where salary<250000;

-- Update 
update employee set first_name = 'Rich Adam' where id = 101;
update employee set last_name = 'Smith';

-- Delete removing records
delete from employee where id = 202;
delete from employee;

-- Transactions

insert into employee values(default,'Joshua','Bednaz',100000);
insert into employee values(default,'Micheal','Fletcher',200000);
insert into employee values(default,'Mahta','G',2);

commit; -- will confirm pending sql statements(transaction ) to the database
rollback; -- undo any sql statements until the last commit

select * from employee;
