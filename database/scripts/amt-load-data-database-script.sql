
use amt;

-- Inserts data for role table --

insert into role values (1, 'admin');
insert into role values (2, 'regular_user');

-- Insert for employee table --  
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (1, 'Fredrika', 'Blinco', 'fblinco0', 'NxD5jvy2v');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (2, 'Harlan', 'Bolesworth', 'hbolesworth1', '9LV4kE');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (3, 'Waldemar', 'Yearn', 'wyearn2', 'ZFXrZIRsKg6');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (4, 'Ailene', 'Fielding', 'afielding3', 'CAXMH7Dr5EO');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (5, 'Adams', 'Surtees', 'asurtees4', '6hH5AT7I');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (6, 'Jane', 'Duckworth', 'jduckworth5', 'uk5Jr8MOH');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (7, 'Feodora', 'Turbard', 'fturbard6', '8gbPtC0Bw');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (8, 'Guenna', 'Gorke', 'ggorke7', 'IvUFFtOIPY2R');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (9, 'Millisent', 'Fagence', 'mfagence8', '2VHbBoG');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (10, 'Aland', 'Hourstan', 'ahourstan9', 'CdV7wjc0116W');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (11, 'Elianore', 'Grimble', 'egrimblea', 'FaJqMWJS4z');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (12, 'Dotty', 'Halgarth', 'dhalgarthb', 'nEop9ZaQRfE8');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (13, 'Enrico', 'Livezey', 'elivezeyc', '9eEbEC9zxQNv');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (14, 'Felix', 'Amos', 'famosd', 'nTKR9T6ZfbI');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (15, 'Myles', 'Wollaston', 'mwollastone', 'P7chnD23ZS');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (16, 'Katina', 'Dory', 'kdoryf', '9eWJ1N');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (17, 'Jereme', 'Bill', 'jbillg', '5p4spppf1');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (18, 'Tod', 'Filkin', 'tfilkinh', 'bpoy4RF34');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (19, 'Jolyn', 'Shoobridge', 'jshoobridgei', '0012fmSW');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (20, 'Davon', 'McFadden', 'dmcfaddenj', 'lSWHFPFVlaX5');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (21, 'Christal', 'Petkens', 'cpetkensk', 'nK2WedrA');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (22, 'Frederica', 'Capes', 'fcapesl', 'pkxDRsp');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (23, 'Pennie', 'Climo', 'pclimom', 'BeBzEpEC');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (24, 'Corabel', 'Watsham', 'cwatshamn', 'FWgipO4');
insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password) values (25, 'Marillin', 'Brosetti', 'mbrosettio', '3qPVwLeuZFGW');

-- Set password to password for all employees --

update employee set employee_password = 'password' where employee_id != 0;

-- Sets all users to regular-user role --

update employee set role_id = 2 where employee_id != 0;

-- Creates an admin user called admin --

insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password, role_id) values (26, 'admin', 'admin', 'admin', 'password', 1);

select * from employee;



