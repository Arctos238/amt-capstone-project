CREATE USER 'amtadmin'@'localhost' IDENTIFIED BY 'password';

FLUSH PRIVILEGES;

GRANT ALL PRIVILEGES ON *.* TO 'amtadmin'@'localhost' WITH GRANT OPTION;	

FLUSH PRIVILEGES;