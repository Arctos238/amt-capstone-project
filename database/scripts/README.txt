Instructions for installing and loading database

Install mysql 8.x:
	- Configure port to default 3306
	- Root password to 'password'

Run SQL scripts in the following order (login in as root):
	-amt-create-user-database-script.sql
	-amt-create-table-database-script.sql
	-amt-load-data-database-script.sql