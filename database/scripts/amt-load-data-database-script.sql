
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

-- Insert data into project address table --

insert into project_address (project_address_id, first_line_address, second_line_address, city, postal_code, project_id, province) values (1, '5963 Manufacturers Crossing', 'PO Box 53719', 'Las Vegas', '89145', 1, 'NV');
insert into project_address (project_address_id, first_line_address, second_line_address, city, postal_code, project_id, province) values (2, '72839 Waubesa Hill', 'PO Box 44026', 'Bakersfield', '93386', 2, 'CA');
insert into project_address (project_address_id, first_line_address, second_line_address, city, postal_code, project_id, province) values (3, '41 Northwestern Road', 'Room 1865', 'Houston', '77095', 3, 'TX');
insert into project_address (project_address_id, first_line_address, second_line_address, city, postal_code, project_id, province) values (4, '57692 Northwestern Drive', 'PO Box 76661', 'Birmingham', '35242', 4, 'AL');
insert into project_address (project_address_id, first_line_address, second_line_address, city, postal_code, project_id, province) values (5, '321 Fairfield Circle', 'Suite 38', 'Warren', '44485', 5, 'OH');
insert into project_address (project_address_id, first_line_address, second_line_address, city, postal_code, project_id, province) values (6, '15 Merry Road', 'Apt 313', 'Las Vegas', '89120', 6, 'NV');
insert into project_address (project_address_id, first_line_address, second_line_address, city, postal_code, project_id, province) values (7, '243 Lerdahl Place', 'Room 1729', 'Albuquerque', '87201', 7, 'NM');
insert into project_address (project_address_id, first_line_address, second_line_address, city, postal_code, project_id, province) values (8, '9 Red Cloud Park', 'Suite 59', 'Mc Keesport', '15134', 8, 'PA');
insert into project_address (project_address_id, first_line_address, second_line_address, city, postal_code, project_id, province) values (9, '33318 Bobwhite Center', 'Apt 1234', 'Everett', '98206', 9, 'WA');
insert into project_address (project_address_id, first_line_address, second_line_address, city, postal_code, project_id, province) values (10, '0798 Waubesa Crossing', 'Apt 1128', 'New Haven', '06505', 10, 'CT');
insert into project_address (project_address_id, first_line_address, second_line_address, city, postal_code, project_id, province) values (11, '450 North Parkway', '8th Floor', 'Dallas', '75387', 11, 'TX');
insert into project_address (project_address_id, first_line_address, second_line_address, city, postal_code, project_id, province) values (12, '7404 Spenser Parkway', '5th Floor', 'New York City', '10014', 12, 'NY');
insert into project_address (project_address_id, first_line_address, second_line_address, city, postal_code, project_id, province) values (13, '9 Dayton Terrace', 'Room 384', 'Wichita', '67205', 13, 'KS');
insert into project_address (project_address_id, first_line_address, second_line_address, city, postal_code, project_id, province) values (14, '68 Welch Pass', '3rd Floor', 'Alexandria', '22301', 14, 'VA');
insert into project_address (project_address_id, first_line_address, second_line_address, city, postal_code, project_id, province) values (15, '78686 Florence Avenue', 'PO Box 25391', 'Inglewood', '90398', 15, 'CA');

-- Insert into project supervisor table --

insert into project_supervisor (project_supervisor_id, project_supervisor_name, project_supervisor_number, project_id) values (1, 'Bethanechol Chloride', '(667) 7365614', 1);
insert into project_supervisor (project_supervisor_id, project_supervisor_name, project_supervisor_number, project_id) values (2, 'Antihemophilic Factor Recombinant', '(642) 3442204', 2);
insert into project_supervisor (project_supervisor_id, project_supervisor_name, project_supervisor_number, project_id) values (3, 'Nystatin', '(628) 6634057', 3);
insert into project_supervisor (project_supervisor_id, project_supervisor_name, project_supervisor_number, project_id) values (4, 'Methyl Salicylate, Capsaicin, and Menthol', '(177) 9252783', 4);
insert into project_supervisor (project_supervisor_id, project_supervisor_name, project_supervisor_number, project_id) values (5, 'SALICYLIC ACID', '(487) 1746919', 5);
insert into project_supervisor (project_supervisor_id, project_supervisor_name, project_supervisor_number, project_id) values (6, 'azithromycin', '(323) 7158541', 6);
insert into project_supervisor (project_supervisor_id, project_supervisor_name, project_supervisor_number, project_id) values (7, 'GLYCERIN', '(286) 3245818', 7);
insert into project_supervisor (project_supervisor_id, project_supervisor_name, project_supervisor_number, project_id) values (8, 'Loperamide Hydrochloride', '(388) 9027843', 8);
insert into project_supervisor (project_supervisor_id, project_supervisor_name, project_supervisor_number, project_id) values (9, 'German Cockroach', '(305) 3867469', 9);
insert into project_supervisor (project_supervisor_id, project_supervisor_name, project_supervisor_number, project_id) values (10, 'Ampicillin and Sulbactam', '(427) 7380678', 10);

-- insert into invoice table --

insert into invoice (invoice_id, invoice_total_price, project_id) values (1, 18529.4, 1);
insert into invoice (invoice_id, invoice_total_price, project_id) values (2, 68409.63, 2);
insert into invoice (invoice_id, invoice_total_price, project_id) values (3, 8387.83, 3);
insert into invoice (invoice_id, invoice_total_price, project_id) values (4, 55126.19, 4);
insert into invoice (invoice_id, invoice_total_price, project_id) values (5, 63487.24, 5);
insert into invoice (invoice_id, invoice_total_price, Project_id) values (6, 61743.68, 6);
insert into invoice (invoice_id, invoice_total_price, project_id) values (7, 4200.28, 7);
insert into invoice (invoice_id, invoice_total_price, project_id) values (8, 72869.23, 8);
insert into invoice (invoice_id, invoice_total_price, project_id) values (9, 88723.6, 9);
insert into invoice (invoice_id, invoice_total_price, project_id) values (10, 11298.11, 10);

-- Insert into Edge Profile --

insert into edge_profile(edge_profile_type, edge_profile_cut, edge_profile_measurement) values ("Standard", "Minimal Eased", "3cm");
insert into edge_profile(edge_profile_type, edge_profile_cut, edge_profile_measurement) values ("Standard", "Eased", "3cm");
insert into edge_profile(edge_profile_type, edge_profile_cut, edge_profile_measurement) values ("Standard", "Heavy Eased", "3cm");
insert into edge_profile(edge_profile_type, edge_profile_cut, edge_profile_measurement) values ("Standard", "Bevel", "3cm");
insert into edge_profile(edge_profile_type, edge_profile_cut, edge_profile_measurement) values ("Standard", "Quarter Round", "3cm");
insert into edge_profile(edge_profile_type, edge_profile_cut, edge_profile_measurement) values ("Standard", "Half Round", "3cm");
insert into edge_profile(edge_profile_type, edge_profile_cut, edge_profile_measurement) values ("Upgrade", "Bullnose", "3cm");
insert into edge_profile(edge_profile_type, edge_profile_cut, edge_profile_measurement) values ("Upgrade", "Ogee", "3cm");
insert into edge_profile(edge_profile_type, edge_profile_cut, edge_profile_measurement) values ("Upgrade", "Eased With Laminate", "3cm x 3cm");
insert into edge_profile(edge_profile_type, edge_profile_cut, edge_profile_measurement) values ("Upgrade", "Bevel With Laminate", "3cm x 3cm");
insert into edge_profile(edge_profile_type, edge_profile_cut, edge_profile_measurement) values ("Upgrade", "Quater Round With Laminate", "3cm x 3cm");
insert into edge_profile(edge_profile_type, edge_profile_cut, edge_profile_measurement) values ("Upgrade", "Half Round With Laminate", "3cm x 3cm");
insert into edge_profile(edge_profile_type, edge_profile_cut, edge_profile_measurement) values ("Upgrade", "Ogee With With Laminate", "3cm x 3cm");
insert into edge_profile(edge_profile_type, edge_profile_cut, edge_profile_measurement) values ("Upgrade", "Miltered Edge", "3cm x 3cm");
insert into edge_profile(edge_profile_type, edge_profile_cut, edge_profile_measurement) values ("Upgrade", "Double Bevel With Laminate", "3cm x 3cm");
insert into edge_profile(edge_profile_type, edge_profile_cut, edge_profile_measurement) values ("Upgrade", "Double Quarter Round With Laminate", "3cm x 3cm");
insert into edge_profile(edge_profile_type, edge_profile_cut, edge_profile_measurement) values ("Upgrade", "Double Bullnose With Laminate", "3cm x 3cm");
insert into edge_profile(edge_profile_type, edge_profile_cut, edge_profile_measurement) values ("Upgrade", "Double Ogee With Eased", "3cm x 3cm");
insert into edge_profile(edge_profile_type, edge_profile_cut, edge_profile_measurement) values ("Upgrade", "Double Stepped With Ogee", "3cm x 3cm");
insert into edge_profile(edge_profile_type, edge_profile_cut, edge_profile_measurement) values ("Upgrade", "Triple Stepped Bullnose", "3cm x 3cm x 3cm");
insert into edge_profile(edge_profile_type, edge_profile_cut, edge_profile_measurement) values ("Upgrade", "Rock Pitched", "3cm x 3cm x 3cm");

