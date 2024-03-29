DROP SCHEMA IF EXISTS `amt`;

CREATE SCHEMA `amt`;

use `amt`;

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `client_contact`;


CREATE TABLE `client_contact` (
  `client_contact_id` int(11) NOT NULL AUTO_INCREMENT,
  `personal_contact_number` varchar(20) DEFAULT NULL,
  `personal_email` varchar(45) DEFAULT NULL,
   `business_email` varchar(45) DEFAULT NULL,
   `client_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`client_contact_id`),
   KEY `FK_contact_client` (`client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `client`;

CREATE TABLE `client` (
  `client_id` int(11) NOT NULL AUTO_INCREMENT,
  `client_name` varchar(80) DEFAULT NULL,
  `client_contact_id` int(11) DEFAULT NULL,
  PRIMARY KEY (client_id),
  KEY FK_CLIENT_CONTACT (client_contact_id),
  CONSTRAINT FK_CLIENT_CONTACT_CONS FOREIGN KEY (client_contact_id) 
  REFERENCES client_contact (client_contact_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS project_address;

CREATE TABLE `project_address` (
	`project_address_id` int(11) NOT NULL AUTO_INCREMENT,
    `first_line_address` varchar(80) DEFAULT NULL,
	`second_line_address` varchar(80) DEFAULT NULL,
    `city` varchar(20) DEFAULT NULL, 
    `province` char(2) DEFAULT NULL,
   `postal_code` varchar(7) DEFAULT NULL,
   `project_id` int(11) DEFAULT NULL,
	PRIMARY KEY (project_address_id),
	KEY FK_PROJECT_PROJADDRESS (project_id),
	CONSTRAINT FK_PROJECT_PROJADDRESS_ID FOREIGN KEY (project_id) 
	REFERENCES project (project_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS project_supervisor;

CREATE TABLE `project_supervisor` (
	`project_supervisor_id` int(11) NOT NULL AUTO_INCREMENT,
    `project_supervisor_name` varchar(80) DEFAULT NULL,
	`project_supervisor_number` varchar(20) DEFAULT NULL,
	`project_supervisor_email` varchar(80) DEFAULT NULL,
   `project_id` int(11) DEFAULT NULL,
	PRIMARY KEY (project_supervisor_id),
	KEY FK_PROJECT_PROJSUPER (project_id),
	CONSTRAINT FK_PROJECT_PROJSUPER_ID FOREIGN KEY (project_id) 
	REFERENCES project (project_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS project_contractor;

CREATE TABLE `project_contractor` (
	`project_contractor_id` int(11) NOT NULL AUTO_INCREMENT,
    `project_contractor_name` varchar(80) DEFAULT NULL,
	`project_contractor_number` varchar(20) DEFAULT NULL,
    `project_contractor_email` varchar(80) DEFAULT NULL,
   `project_id` int(11) DEFAULT NULL,
	PRIMARY KEY (project_contractor_id),
	KEY FK_PROJECT_PROJCONTR (project_id),
	CONSTRAINT FK_PROJECT_PROJCONTR_ID FOREIGN KEY (project_id) 
	REFERENCES project (project_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS project;

CREATE TABLE project (
  project_id int(5) NOT NULL AUTO_INCREMENT,
  project_name varchar(60) NOT NULL,
  project_status int(1) DEFAULT 1,
  project_cabinets_condition int(1) DEFAULT 1,
  project_counter_removal int(1) DEFAULT 1,
  project_tile_removal int(1) DEFAULT 1,
  employee_name varchar (48),
  client_id int(5),
  PRIMARY KEY (project_id),
  KEY FK_PROJECT_CLIENT (client_id),
  CONSTRAINT FK_PROJECT_CLIENT_ID FOREIGN KEY (client_id) 
  REFERENCES client (client_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS quote;

CREATE TABLE quote (
  quote_id int(5) NOT NULL AUTO_INCREMENT,
  quote_price double(8,2) NOT NULL,
  quote_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  project_id int(5),
  PRIMARY KEY (quote_id),
  KEY FK_QUOTE_PROJECT (project_id),
  CONSTRAINT FK_QUOTE_PROJECT_ID FOREIGN KEY (project_id) 
  REFERENCES project (project_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS purchase_order;

CREATE TABLE purchase_order (
  purchase_order_id int(5) NOT NULL AUTO_INCREMENT,
  purchase_order_number int(24) NOT NULL,
  document_name varchar(12) NOT NULL,
  purchase_order_total_price double(8, 2),
  project_id int(5),
  PRIMARY KEY (purchase_order_id),
  KEY FK_PURCHASE_ORDER_PROJECT (project_id),
  CONSTRAINT FK_PURCHASE_ORDER_PROJECT_ID FOREIGN KEY (project_id) 
  REFERENCES project (project_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS purchase_order_item;

CREATE TABLE purchase_order_item (
  purchase_order_item_id int(5) NOT NULL AUTO_INCREMENT,
  purchase_order_item_name varchar(12) NOT NULL,
  purchase_order_item_price double(8, 2) NOT NULL,
  purchase_order_id int(5),
  PRIMARY KEY (purchase_order_item_id),
  KEY FK_PO_POITEM (purchase_order_id),
  CONSTRAINT FK_PO_POITEM_ID FOREIGN KEY (purchase_order_id) 
  REFERENCES purchase_order (purchase_order_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1; ;



DROP TABLE IF EXISTS invoice;

CREATE TABLE invoice (
  invoice_id int(5) NOT NULL AUTO_INCREMENT,
  invoice_total_price double(12, 2),
  date_created datetime DEFAULT CURRENT_TIMESTAMP,
  location varchar(60),
  project_id int(5),
  PRIMARY KEY (invoice_id),
  KEY FK_INVOICE_PROJECT (project_id),
  CONSTRAINT FK_INVOICE_PROJECT_ID FOREIGN KEY (project_id) 
  REFERENCES project (project_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ;

DROP TABLE IF EXISTS deposit_form;

CREATE TABLE deposit_form (
  deposit_form_id int(5) NOT NULL AUTO_INCREMENT,
  is_deposit int(1) NOT NULL DEFAULT 0,
  deposit_amount double(8, 2) NOT NULL,
  deposit_form_phone_number varchar(22),
  deposit_email_address varchar(100),
  invoice_id int(5),
  PRIMARY KEY (deposit_form_id),
  KEY FK_deposit_invoice (invoice_id),
  CONSTRAINT FK_deposit_INVOICE_ID FOREIGN KEY (invoice_id) 
  REFERENCES invoice (invoice_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS billing_address;

CREATE TABLE `billing_address` (
	`billing_address_id` int(11) NOT NULL AUTO_INCREMENT,
    `first_line_address` varchar(80) DEFAULT NULL,
	`second_line_address` varchar(80) DEFAULT NULL,
    `city` varchar(20) DEFAULT NULL, 
	`province` char(2) DEFAULT NULL,
   `postal_code` varchar(7) DEFAULT NULL,
   `deposit_form_id` int(11) DEFAULT NULL,
	PRIMARY KEY (billing_address_id),
	KEY FK_DEPOSIT_FORM_BILLADDRESS (deposit_form_id),
	CONSTRAINT FK_DEPOSIT_FORM_BILLADDRESS_ID FOREIGN KEY (deposit_form_id) 
	REFERENCES deposit_form (deposit_form_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS credit_card_information;

CREATE TABLE `credit_card_information` (
	`credit_card_information_id` int(11) NOT NULL AUTO_INCREMENT,
    `name_on_card` varchar(70) DEFAULT NULL,
	`credit_card_number` varchar(36) DEFAULT NULL,
    `expiry_date` varchar(10) DEFAULT NULL, 
	`cvs` int(4) DEFAULT NULL,
   `credit_card_type` varchar(20) DEFAULT NULL,
   `deposit_form_id` int(11) DEFAULT NULL,
	PRIMARY KEY (credit_card_information_id),
	KEY FK_DEPOSIT_FORM_CC (deposit_form_id),
	CONSTRAINT FK_DEPOSIT_FORM_CC_ID FOREIGN KEY (deposit_form_id) 
	REFERENCES deposit_form (deposit_form_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS invoice_item;

CREATE TABLE edge_profile (
  edge_profile_id int(5) NOT NULL AUTO_INCREMENT,
  edge_profile_type varchar(60),
  edge_profile_cut varchar(60),
  edge_profile_measurement varchar(60),
  PRIMARY KEY (edge_profile_id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

CREATE TABLE invoice_item_note (
	invoice_item_note_id int (5) NOT NULL AUTO_INCREMENT,
    invoice_item_note varchar(500),
    invoice_item_id int (5),
    PRIMARY KEY (invoice_item_note_id),
    KEY FK_INVOICEITEM_INVOICEITEMNOTE (invoice_item_id),
	CONSTRAINT FK_INVOICEITEM_INVOICEITEMNOTE_ID FOREIGN KEY (invoice_item_id) 
	REFERENCES invoice_item (invoice_item_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

CREATE TABLE invoice_item (
  invoice_item_id int(5) NOT NULL AUTO_INCREMENT,
  invoice_item_name varchar(48) NOT NULL,
  invoice_item_price double(12, 2) NOT NULL,
  invoice_item_measurement varchar(200),
  invoice_item_width double(6, 2),
  invoice_item_length double(6, 2),
  invoice_item_area double(18,4),
  invoice_item_depth double (10,2),
  edge_profile_id int(5),
  material varchar(48),
  invoice_id int(5),
  PRIMARY KEY (invoice_item_id),
  KEY FK_INVOICE_INVOICEITEM (invoice_id),
  CONSTRAINT FK_INVOICE_INVOICEITEM_ID FOREIGN KEY (invoice_id) 
  REFERENCES invoice (invoice_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  KEY FK_EDGEPROFILE_INVOICEITEM (edge_profile_id),
  CONSTRAINT FK_EDGEPROFILE_INVOICEITEM_ID FOREIGN KEY (edge_profile_id) 
  REFERENCES edge_profile (edge_profile_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS image;

CREATE TABLE image (
  image_id int(5) NOT NULL AUTO_INCREMENT,
  image_type varchar(30) NOT NULL,
  image_name varchar(100) NOT NULL,
  image_url varchar(150) NOT NULL,
  image_format varchar(20) NOT NULL,
  image_size long NOT NULL,
  project_id int(5),
  PRIMARY KEY (image_id),
  KEY FK_IMAGE_PROJECT (project_id),
  CONSTRAINT FK_IMAGE_PROJECT_ID FOREIGN KEY (project_id) 
  REFERENCES project (project_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS role;

CREATE TABLE role (
  role_id int(5) unique NOT NULL AUTO_INCREMENT,
   role_name varchar(22) DEFAULT NULL,
  PRIMARY KEY (role_id),
   KEY FK_ROLE_ID (role_id)
) ;

DROP TABLE IF EXISTS employee;


CREATE TABLE employee (
  employee_id int(5) NOT NULL AUTO_INCREMENT,
  employee_first_name varchar(22) NOT NULL,
  employee_last_name varchar(22) NOT NULL,
  employee_username  varchar(30) unique NOT NULL,
  employee_password varchar(50),
  role_id int(5),
  PRIMARY KEY (employee_id),
  KEY FK_ROLE_ID (role_id),
  CONSTRAINT FK_ROLE_ID FOREIGN KEY (role_id) 
  REFERENCES role (role_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ;

SET FOREIGN_KEY_CHECKS = 1;

--------------------------------------------------------------------------------
-- Insert Admin --

use amt;

-- Inserts data for role table --

insert into role values (1, 'Admin');
insert into role values (2, 'Regular User');

-- Admin --

insert into employee (employee_id, employee_first_name, employee_last_name, employee_username, employee_password, role_id) values (26, 'admin', 'admin', 'admin', 'password', 1);


