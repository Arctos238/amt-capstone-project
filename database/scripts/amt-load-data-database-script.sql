
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

-- Inserts data into client_contact table --

insert into client_contact (client_contact_id, personal_contact_number, personal_email, business_email, client_id) values (1, '(162) 6413522', 'kgoolding0@dedecms.com', 'ndrever0@storify.com', 1);
insert into client_contact (client_contact_id, personal_contact_number, personal_email, business_email, client_id) values (2, '(822) 8694536', 'leustice1@mail.ru', 'jyuryichev1@nyu.edu', 2);
insert into client_contact (client_contact_id, personal_contact_number, personal_email, business_email, client_id) values (3, '(282) 5038811', 'amilton2@freewebs.com', 'sdambrosio2@cbslocal.com', 3);
insert into client_contact (client_contact_id, personal_contact_number, personal_email, business_email, client_id) values (4, '(804) 2479403', 'tyuryev3@hatena.ne.jp', 'mbrinsden3@sakura.ne.jp', 4);
insert into client_contact (client_contact_id, personal_contact_number, personal_email, business_email, client_id) values (5, '(918) 6891632', 'pdyche4@who.int', 'pdincey4@hc360.com', 5);
insert into client_contact (client_contact_id, personal_contact_number, personal_email, business_email, client_id) values (6, '(709) 3363212', 'jparks5@networksolutions.com', 'celizabeth5@theglobeandmail.com', 6);
insert into client_contact (client_contact_id, personal_contact_number, personal_email, business_email, client_id) values (7, '(814) 5654571', 'vorton6@nba.com', 'nfonzone6@taobao.com', 7);
insert into client_contact (client_contact_id, personal_contact_number, personal_email, business_email, client_id) values (8, '(716) 3675988', 'pforgan7@mediafire.com', 'tbrettor7@yahoo.com', 8);
insert into client_contact (client_contact_id, personal_contact_number, personal_email, business_email, client_id) values (9, '(809) 9865664', 'abrummitt8@miitbeian.gov.cn', 'ngoward8@photobucket.com', 9);
insert into client_contact (client_contact_id, personal_contact_number, personal_email, business_email, client_id) values (10, '(146) 8454028', 'ewillcot9@kickstarter.com', 'kcrosgrove9@infoseek.co.jp', 10);

-- Insert data into client table -- 

insert into client values (1, 'Corina Bob', 1);
insert into client values (2, 'Leanora Rego', 2);
insert into client values (3, 'Korie Nupte', 3);
insert into client  values (4, 'Shawnee Place', 4);
insert into client  values (5, 'Kakalina Roberta', 5);
insert into client  values (6, 'Lotte Leslie',  6);
insert into client  values (7, 'Ulysses Nugugual', 7);
insert into client values (8, 'Tina Turner',  8);
insert into client  values (9, 'Babb Booka',  9);
insert into client  values (10, 'Skyler Gray',  10);

-- Insert data into project table --

insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (1, 'Can''t Buy Me Love', true, false, true, 1);
insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (2, 'Nicht alle', false, false, true, 2);
insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (3, 'Bambi a', true, false, false, 1);
insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (4, 'Detective', false, true, false, 3);
insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (5, 'Berlin Calling', false, true, false, 4);
insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (6, 'The Corsican ', true, false, false, 3);
insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (7, 'More About Peter)', true, false, false, 2);
insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (8, 'Serial', true, false, false, 2);
insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (9, 'Baby Face', false, false, true, 1);
insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (10, 'Sweet Evil', false, false, true, 3);
insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (11, 'Gloria', true, true, false, 5);
insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (12, 'A Good Marriage', false, false, false, 7);
insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (13, 'Samaritan, The', false, false, true, 6);
insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (14, 'Crimes of Fashion', false, false, true, 1);
insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (15, 'Dad Save the World', false, false, true, 4);

