RESTful Application V0.1

Run rest-app-v0.1.jar file via cmd line with "java -jar rest-app-v0.1.jar" command no arguments.

Employee w/ Role REST endpoints configured:

GET Request: localhost:8080/api/employees = 
	Returns all employees from the database

GET Request: localhost:8080/api/employees/{employee_username} = 
	Enter employee username in brackets to retrieve one employee or receive error message JSON object.

DELETE Request: localhost:8080/api/employees/{employee_username} =
	Enter employee username in brackets to delete the employee or receive error message JSON object.

POST Request: localhost:8080/api/employees = 
	Send Employee and Role JSON object as POST Request to save employee to database system.

PUT Request: localhost:8080/api/employees = 
	Send Employee JSON object to update employee in the database system.