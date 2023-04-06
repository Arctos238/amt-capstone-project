
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

insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id, employee_name) values (1, 'Can''t Buy Me Love', true, false, true, 1, 'John');
insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (2, 'Nicht alle', false, false, true, 2);
insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (3, 'Bambi a', true, false, false, 1);
insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (4, 'Detective', false, true, false, 3);
insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (5, 'Berlin Calling', false, true, false, 4);
insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (6, 'The Corsican ', true, false, false, 3);
insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (7, 'More About Peter)', true, false, false, 2);
insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (8, 'Serial', true, false, false, 2);
insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (9, 'Baby Face', false, false, true, 1);
insert into project (project_id, project_name, project_status, project_cabinets_condition, project_tile_removal, client_id) values (10, 'Sweet Evil', false, false, true, 3);


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


-- Insert into project supervisor table --

insert into project_supervisor (project_supervisor_name, project_supervisor_number, project_supervisor_email, project_id) values ('Jamil Darbyshire', '(263) 4274460', 'jdarbyshire0@google.com', 1);
insert into project_supervisor (project_supervisor_name, project_supervisor_number, project_supervisor_email, project_id) values ('Judye Pabelik', '(838) 2389976', 'jpabelik1@webmd.com', 2);
insert into project_supervisor (project_supervisor_name, project_supervisor_number, project_supervisor_email, project_id) values ('Vivienne Legh', '(747) 4057359', 'vlegh2@hostgator.com', 3);
insert into project_supervisor (project_supervisor_name, project_supervisor_number, project_supervisor_email, project_id) values ('Ruy Stracey', '(122) 3729205', 'rstracey3@time.com', 4);
insert into project_supervisor (project_supervisor_name, project_supervisor_number, project_supervisor_email, project_id) values ('Velvet Umfrey', '(904) 2114469', 'vumfrey4@google.it', 5);
insert into project_supervisor (project_supervisor_name, project_supervisor_number, project_supervisor_email, project_id) values ('Adaline Neeve', '(437) 4439985', 'aneeve5@unicef.org', 6);
insert into project_supervisor (project_supervisor_name, project_supervisor_number, project_supervisor_email, project_id) values ('Valerie Bolf', '(551) 2574784', 'vbolf6@usda.gov', 7);
insert into project_supervisor (project_supervisor_name, project_supervisor_number, project_supervisor_email, project_id) values ('Zarla Shobrook', '(135) 2694212', 'zshobrook7@omniture.com', 8);
insert into project_supervisor (project_supervisor_name, project_supervisor_number, project_supervisor_email, project_id) values ('Ashli Bellringer', '(582) 6102837', 'abellringer8@un.org', 9);
insert into project_supervisor (project_supervisor_name, project_supervisor_number, project_supervisor_email, project_id) values ('Land Paulack', '(477) 9813238', 'lpaulack9@imdb.com', 10);

-- insert into project contractor table --

insert into project_contractor (project_contractor_name, project_contractor_number, project_contractor_email, project_id) values ('Shaine Kuban', '(766) 3069955', 'skuban0@census.gov', 1);
insert into project_contractor (project_contractor_name, project_contractor_number, project_contractor_email, project_id) values ('Carolina Skelhorne', '(513) 1318348', 'cskelhorne1@google.com.hk', 2);
insert into project_contractor (project_contractor_name, project_contractor_number, project_contractor_email, project_id) values ('Joelynn Perutto', '(446) 8962494', 'jperutto2@sciencedirect.com', 3);
insert into project_contractor (project_contractor_name, project_contractor_number, project_contractor_email, project_id) values ('Kristi Eynaud', '(675) 4139262', 'keynaud3@jalbum.net', 4);
insert into project_contractor (project_contractor_name, project_contractor_number, project_contractor_email, project_id) values ('Ruprecht Grooby', '(837) 7065235', 'rgrooby4@si.edu', 5);
insert into project_contractor (project_contractor_name, project_contractor_number, project_contractor_email, project_id) values ('Tallou Toogood', '(987) 2847021', 'ttoogood5@ox.ac.uk', 6);
insert into project_contractor (project_contractor_name, project_contractor_number, project_contractor_email, project_id) values ('Layne O''Halleghane', '(155) 8487911', 'lohalleghane6@360.cn', 7);
insert into project_contractor (project_contractor_name, project_contractor_number, project_contractor_email, project_id) values ('Kai Dunrige', '(194) 9191305', 'kdunrige7@lycos.com', 8);
insert into project_contractor (project_contractor_name, project_contractor_number, project_contractor_email, project_id) values ('Marilee Kobisch', '(611) 4456456', 'mkobisch8@seesaa.net', 9);
insert into project_contractor (project_contractor_name, project_contractor_number, project_contractor_email, project_id) values ('Berny Kulicke', '(340) 5480354', 'bkulicke9@nymag.com', 10);


-- insert into invoice table --

insert into invoice (invoice_id, invoice_total_price, location, project_id) values (1, 124, 'Palma De Mallorca', 4);
insert into invoice (invoice_id, invoice_total_price, location, project_id) values (2, 60, 'Majie', 6);
insert into invoice (invoice_id, invoice_total_price, location, project_id) values (3, 93, 'Pasar', 9);
insert into invoice (invoice_id, invoice_total_price, location, project_id) values (4, 121, 'Bokhan', 5);
insert into invoice (invoice_id, invoice_total_price, location, project_id) values (5, 11, 'Gersikputih Tengah', 1);
insert into invoice (invoice_id, invoice_total_price, location, project_id) values (6, 170, 'Kraljevo', 6);
insert into invoice (invoice_id, invoice_total_price, location, project_id) values (7, 39, 'Duvergé', 6);
insert into invoice (invoice_id, invoice_total_price, location, project_id) values (8, 146, 'Opatowiec', 6);
insert into invoice (invoice_id, invoice_total_price, location, project_id) values (9, 147, 'Särevere', 3);
insert into invoice (invoice_id, invoice_total_price, location, project_id) values (10, 98, 'Kigoma', 10);
insert into invoice (invoice_id, invoice_total_price, location, project_id) values (11, 178, 'Baizhu', 6);
insert into invoice (invoice_id, invoice_total_price, location, project_id) values (12, 31, 'Qusar', 1);
insert into invoice (invoice_id, invoice_total_price, location, project_id) values (13, 186, 'Bečmen', 1);
insert into invoice (invoice_id, invoice_total_price, location, project_id) values (14, 223, 'Terong', 6);
insert into invoice (invoice_id, invoice_total_price, location, project_id) values (15, 61, 'Dangshun', 9);

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

-- Insert into invoice item -- 

insert into invoice_item (invoice_item_measurement, invoice_item_width, invoice_item_length, invoice_item_name, invoice_item_price, invoice_item_area, invoice_item_depth, edge_profile_id, invoice_id) values ('Lucita', 8.02, 31.84, 'Amlodipine ', 5667.34, 12.4, 146.04, 10, 7);
insert into invoice_item (invoice_item_measurement, invoice_item_width, invoice_item_length, invoice_item_name, invoice_item_price, invoice_item_area, invoice_item_depth, edge_profile_id, invoice_id) values ('Jemmy', 73.13, 12.27, 'Benzocaine', 1792.24, 121.86, 53.25, 5, 7);
insert into invoice_item (invoice_item_measurement, invoice_item_width, invoice_item_length, invoice_item_name, invoice_item_price, invoice_item_area, invoice_item_depth, edge_profile_id, invoice_id) values ('Tammy', 48.77, 39.34, 'Alfalfa', 9333.48, 91.42, 100.86, 9, 3);
insert into invoice_item (invoice_item_measurement, invoice_item_width, invoice_item_length, invoice_item_name, invoice_item_price, invoice_item_area, invoice_item_depth, edge_profile_id, invoice_id) values ('Homerus', 70.81, 93.2, 'Diphenhydramine hydrochloride', 3386.31, 83.78, 93.97, 7, 3);
insert into invoice_item (invoice_item_measurement, invoice_item_width, invoice_item_length, invoice_item_name, invoice_item_price, invoice_item_area, invoice_item_depth, edge_profile_id, invoice_id) values ('Hansiain', 2.06, 11.17, 'Isosorbide Mononitrate', 5016.05, 199.35, 173.48, 10, 7);
insert into invoice_item (invoice_item_measurement, invoice_item_width, invoice_item_length, invoice_item_name, invoice_item_price, invoice_item_area, invoice_item_depth, edge_profile_id, invoice_id) values ('Rancell', 10.96, 1.03, 'Atomoxetine hydrochloride', 2708.63, 124.24, 150.17, 3, 2);
insert into invoice_item (invoice_item_measurement, invoice_item_width, invoice_item_length, invoice_item_name, invoice_item_price, invoice_item_area, invoice_item_depth, edge_profile_id, invoice_id) values ('Margette', 64.77, 17.72, 'Cephalexin', 2297.43, 75.16, 111.45, 8, 7);
insert into invoice_item (invoice_item_measurement, invoice_item_width, invoice_item_length, invoice_item_name, invoice_item_price, invoice_item_area, invoice_item_depth, edge_profile_id, invoice_id) values ('Maggi', 81.24, 67.02, 'SODIUM MONOFLUOROPHOSPHATE', 2344.15, 75.08, 97.11, 10, 6);
insert into invoice_item (invoice_item_measurement, invoice_item_width, invoice_item_length, invoice_item_name, invoice_item_price, invoice_item_area, invoice_item_depth, edge_profile_id, invoice_id) values ('Shela', 83.55, 16.96, 'midodrine hydrochloride', 4400.35, 75.53, 180.83, 5, 10);
insert into invoice_item (invoice_item_measurement, invoice_item_width, invoice_item_length, invoice_item_name, invoice_item_price, invoice_item_area, invoice_item_depth, edge_profile_id, invoice_id) values ('Conroy', 28.21, 25.17, 'Octinoxate, Oxybenzone, and Titanium Dioxide', 1841.44, 167.56, 161.19, 3, 10);
insert into invoice_item (invoice_item_measurement, invoice_item_width, invoice_item_length, invoice_item_name, invoice_item_price, invoice_item_area, invoice_item_depth, edge_profile_id, invoice_id) values ('Syd', 96.15, 8.63, 'Ethyl Alcohol', 1402.29, 100.54, 160.58, 6, 9);
insert into invoice_item (invoice_item_measurement, invoice_item_width, invoice_item_length, invoice_item_name, invoice_item_price, invoice_item_area, invoice_item_depth, edge_profile_id, invoice_id) values ('Theadora', 34.5, 52.23, 'Nicotine Polacrilex', 5446.66, 154.29, 34.91, 4, 5);
insert into invoice_item (invoice_item_measurement, invoice_item_width, invoice_item_length, invoice_item_name, invoice_item_price, invoice_item_area, invoice_item_depth, edge_profile_id, invoice_id) values ('Miguel', 59.4, 61.88, 'levetiracetam', 3340.34, 54.46, 85.25, 10, 3);
insert into invoice_item (invoice_item_measurement, invoice_item_width, invoice_item_length, invoice_item_name, invoice_item_price, invoice_item_area, invoice_item_depth, edge_profile_id, invoice_id) values ('Elinore', 46.84, 86.6, 'Echinacea (Angustifolia)', 1378.1, 190.04, 53.81, 5, 8);
insert into invoice_item (invoice_item_measurement, invoice_item_width, invoice_item_length, invoice_item_name, invoice_item_price, invoice_item_area, invoice_item_depth, edge_profile_id, invoice_id) values ('Armin', 11.05, 14.06, 'citalopram', 9246.62, 52.87, 155.54, 2, 9);
insert into invoice_item (invoice_item_measurement, invoice_item_width, invoice_item_length, invoice_item_name, invoice_item_price, invoice_item_area, invoice_item_depth, edge_profile_id, invoice_id) values ('Eadmund', 55.64, 98.83, 'Aluminum Zirconium Tetrachlorohydrex GLY', 3924.79, 158.15, 89.8, 10, 5);
insert into invoice_item (invoice_item_measurement, invoice_item_width, invoice_item_length, invoice_item_name, invoice_item_price, invoice_item_area, invoice_item_depth, edge_profile_id, invoice_id) values ('Hunt', 97.01, 56.37, 'Mupirocin', 568.11, 89.08, 187.97, 3, 10);
insert into invoice_item (invoice_item_measurement, invoice_item_width, invoice_item_length, invoice_item_name, invoice_item_price, invoice_item_area, invoice_item_depth, edge_profile_id, invoice_id) values ('Walton', 6.15, 36.1, 'Ethyl Alcohol', 66.88, 47.09, 112.96, 7, 9);
insert into invoice_item (invoice_item_measurement, invoice_item_width, invoice_item_length, invoice_item_name, invoice_item_price, invoice_item_area, invoice_item_depth, edge_profile_id, invoice_id) values ('Norton', 84.46, 61.16, 'Chelidonium majus', 5815.37, 140.69, 153.73, 4, 4);
insert into invoice_item (invoice_item_measurement, invoice_item_width, invoice_item_length, invoice_item_name, invoice_item_price, invoice_item_area, invoice_item_depth, edge_profile_id, invoice_id) values ('Jilly', 93.93, 45.44, 'fenofibrate', 7516.64, 54.43, 151.5, 8, 9);

-- Insert into invoice_item_note --

insert into invoice_item_note (invoice_item_note, invoice_item_id) values ('166YQBrTq8n3BoNJFLC4s5tBamMU4rW1G4', 4);
insert into invoice_item_note (invoice_item_note, invoice_item_id) values ('1KLhWrtEUor1iFmrxhMRtxFkjioJs1mBt7', 4);
insert into invoice_item_note (invoice_item_note, invoice_item_id) values ('15yD6SoL8EPddUqKYccSKBHrsqGWVPauo1', 4);
insert into invoice_item_note (invoice_item_note, invoice_item_id) values ('19pC8v2PutNSvpv6u7Rak2he24FupnbnQD', 5);
insert into invoice_item_note (invoice_item_note, invoice_item_id) values ('17yx22q98n4stdmox1Lss37S51cKyDZXPW', 7);
insert into invoice_item_note (invoice_item_note, invoice_item_id) values ('1BFXvEEfS7eFESbCGJoSYZzityQLPaXP4a', 6);
insert into invoice_item_note (invoice_item_note, invoice_item_id) values ('14xhJM73JSM5LoxwFEkMT4YdAgfVSVW3Cj', 3);
insert into invoice_item_note (invoice_item_note, invoice_item_id) values ('1BNN4yDdLF5QD7XnoUkncCvnoW38eniFaZ', 6);
insert into invoice_item_note (invoice_item_note, invoice_item_id) values ('18UYtPJbSB8BaDf5DKMYktrVe3h7G9gdCF', 8);
insert into invoice_item_note (invoice_item_note, invoice_item_id) values ('1KDrzByvheCpDgMj4GuNTS68KeRgVrcjWQ', 3);
insert into invoice_item_note (invoice_item_note, invoice_item_id) values ('1Mw1KpbBvKmGDSuWbmumVK6GoeFkaKLEB6', 1);
insert into invoice_item_note (invoice_item_note, invoice_item_id) values ('1ABb3XDvKHpT9KP6ghpeG3MjNizALNjoVb', 2);
insert into invoice_item_note (invoice_item_note, invoice_item_id) values ('1LFr82Tr2zPQ4qg7V6MvxXrn5o3SPUuZzs', 10);
insert into invoice_item_note (invoice_item_note, invoice_item_id) values ('18orEpHu3yAmJzbZhJdLqJCkn8q2S7ttaY', 5);
insert into invoice_item_note (invoice_item_note, invoice_item_id) values ('1HFVj3C4fsmHBauCJh1aHyoirNcaudH7oR', 2);
insert into invoice_item_note (invoice_item_note, invoice_item_id) values ('1KWxuv7aojJwgN2oHME248TdC4UVExMyT3', 2);
insert into invoice_item_note (invoice_item_note, invoice_item_id) values ('17zAF3Nqzv42NNFb36F3PytVNHygRWLMsX', 1);
insert into invoice_item_note (invoice_item_note, invoice_item_id) values ('1JFVq73sM6ufok7pB4PgadktR9e3v72QdF', 3);
insert into invoice_item_note (invoice_item_note, invoice_item_id) values ('17XXnonoBZG3Fi942Gjwp3XPnTa6kG7E9y', 9);
insert into invoice_item_note (invoice_item_note, invoice_item_id) values ('19cx3tabr9swazMkh9DGo9s4YxP7Da2nRf', 6);
