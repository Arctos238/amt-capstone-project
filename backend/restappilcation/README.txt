RESTful Application V0.1

Run rest-app-v0.1.jar file via cmd line with "java -jar rest-app-v0.1.jar" command no arguments.


Employee w/ Role REST endpoints configured:

GET Request: http://70.77.64.68:8083/api/employees = 
	Returns all employees from the database

GET Request: http://70.77.64.68:8083/api/employees/{employee_username} = 
	Enter employee username in brackets to retrieve one employee or receive error message JSON object.

DELETE Request: http://70.77.64.68:8083/api/employees/{employee_username} =
	Enter employee username in brackets to delete the employee or receive error message JSON object.

POST Request: http://70.77.64.68:8083/api/employees = 
	Send Employee and Role JSON object as POST Request to save employee to database system.

PUT Request: http://70.77.64.68:8083/api/employees = 
	Send Employee JSON object to update employee in the database system.



Client W/ Project REST endpoints configured:

GET Request: http://70.77.64.68:8083/api/clients = 
	Returns all clients from the database

GET Request: http://70.77.64.68:8083/api/clients/{client_first_name} = 
	Returns all clients with that first name from the database or recieve an error message JSON.

GET Request: http://70.77.64.68:8083/api/clients/id/{client_id} = 
	Returns a client with that clients id from the database or recieve an error message JSON.

DELETE Request: http://70.77.64.68:8083/api/clients/id/{client_id} = 
	Enter client id in brackets to delete the employee from the database or receive error message JSON object.

POST Request: http://70.77.64.68:8083/api/clients = 
	Send client and client_contact JSON object as a POST Request to save employee to database system.

PUT Request: http://70.77.64.68:8083/api/clients = 
	Send client and client_contact JSON object as a PUT Request to update employee in the database system.