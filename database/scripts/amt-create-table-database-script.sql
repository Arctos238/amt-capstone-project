DROP SCHEMA IF EXISTS `amt`;

CREATE SCHEMA `amt`;

use `amt`;

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `client_contact`;

CREATE TABLE `client_contact` (
  `client_contact_id` int(11) NOT NULL AUTO_INCREMENT,
  `personal_contact_number` varchar(14) DEFAULT NULL,
  `personal_email` varchar(45) DEFAULT NULL,
   `business_email` varchar(45) DEFAULT NULL,
   `client_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`client_contact_id`),
   KEY `FK_contact_client` (`client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `client`;

CREATE TABLE `client` (
  `client_id` int(11) NOT NULL AUTO_INCREMENT,
  `client_first_name` varchar(45) DEFAULT NULL,
  `client_last_name` varchar(45) DEFAULT NULL,
  `client_contact_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`client_id`),
  KEY `FK_CLIENT_CONTACT` (`client_contact_id`),
  CONSTRAINT `FK_CLIENT_CONTACT_CONS` FOREIGN KEY (`client_contact_id`) 
  REFERENCES `client_contact` (`client_contact_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS project;

CREATE TABLE project (
  project_id int(5) NOT NULL AUTO_INCREMENT,
  project_name varchar(22) NOT NULL,
  project_status int(1) DEFAULT 1,
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

DROP TABLE IF EXISTS deposit_form;

CREATE TABLE deposit_form (
  deposit_form_id int(5) NOT NULL AUTO_INCREMENT,
  deposit_form_status int(1) NOT NULL DEFAULT 0,
  deposit_amount double(8, 2) NOT NULL,
  project_id int(5),
  PRIMARY KEY (deposit_form_id),
  KEY FK_deposit_PROJECT (project_id),
  CONSTRAINT FK_deposit_PROJECT_ID FOREIGN KEY (project_id) 
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
  invoice_number int(24) NOT NULL,
  document_name varchar(12) NOT NULL,
  invoice_total_price double(8, 2),
  project_id int(5),
  PRIMARY KEY (invoice_id),
  KEY FK_INVOICE_PROJECT (project_id),
  CONSTRAINT FK_INVOICE_PROJECT_ID FOREIGN KEY (project_id) 
  REFERENCES project (project_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ;

DROP TABLE IF EXISTS invoice_item;

CREATE TABLE invoice_item (
  invoice_item_id int(5) NOT NULL AUTO_INCREMENT,
  invoice_item_name varchar(12) NOT NULL,
  invoice_item_price double(8, 2) NOT NULL,
  invoice_id int(5),
  PRIMARY KEY (invoice_item_id),
  KEY FK_INVOICE_INVOICEITEM (invoice_id),
  CONSTRAINT FK_INVOICE_INVOICEITEM_ID FOREIGN KEY (invoice_id) 
  REFERENCES invoice (invoice_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS image;

CREATE TABLE image (
  image_id int(5) NOT NULL AUTO_INCREMENT,
  image_type varchar(5) NOT NULL,
  document_name varchar(12) NOT NULL,
  image_url varchar(50) NOT NULL,
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
  employee_username varchar(12) NOT NULL,
  employee_password varchar(50),
  role_id int(5),
  PRIMARY KEY (employee_id),
  KEY FK_ROLE_ID (role_id),
  CONSTRAINT FK_ROLE_ID FOREIGN KEY (role_id) 
  REFERENCES role (role_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ;

SET FOREIGN_KEY_CHECKS = 1;

