RESTful Application V0.3

Run rest-app-v0.1.jar file via cmd line with "java -jar rest-app-v0.1.jar" command no arguments.

---------------------------------------------------------------------------------------------------------------------------------------------

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

---------------------------------------------------------------------------------------------------------------------------------------------

Client W/ Project REST endpoints configured:

GET Request: http://70.77.64.68:8083/api/clients = 
	Returns all clients from the database

GET Request: http://70.77.64.68:8083/api/clients/{client_first_name} = 
	Returns all clients with that first name from the database or recieve an error message JSON.

GET Request: http://70.77.64.68:8083/api/clients/id/{client_id} = 
	Returns a client with that clients id from the database or recieve an error message JSON.

DELETE Request: http://70.77.64.68:8083/api/clients/id/{client_id} = 
	Enter client id in brackets to delete the client from the database or receive error message JSON object.

POST Request: http://70.77.64.68:8083/api/clients = 
	Send client and client_contact JSON object as a POST Request to save client to database system.

PUT Request: http://70.77.64.68:8083/api/clients = 
	Send client and client_contact JSON object as a PUT Request to update client in the database system.

---------------------------------------------------------------------------------------------------------------------------------------------

Project REST endpoints configured:

GET Request: http://70.77.64.68:8083/api/projects = 
	Returns all projects from the database

GET Request: http://70.77.64.68:8083/api/projects/{clientId} = 
	Returns all projects that are attached to that clientId from the database or recieve an error message JSON.

GET Request: http://70.77.64.68:8083/api/projects/id/{projectId} = 
	Returns a project with that project id from the database or recieve an error message JSON.

DELETE Request: http://70.77.64.68:8083/api/projects/id/{projectId} = 
	Enter project id in brackets to delete the project from the database or receive error message JSON object.

POST Request: http://70.77.64.68:8083/api/projects = 
	Send project w/o project id or 0 for project Id and client object JSON object as a POST Request to save project to database system.

PUT Request: http://70.77.64.68:8083/api/projects = 
	Send project w project id JSON object as a PUT Request to update project in the database system.

---------------------------------------------------------------------------------------------------------------------------------------------

Invoice REST endpoints configured:

GET Request: http://70.77.64.68:8083/api/invoices = 
	Returns all invoices from the database

GET Request: http://70.77.64.68:8083/api/invoices/{projectid} = 
	Returns all invoices that are attached to that projectId from the database or recieve an error message JSON.

GET Request: http://70.77.64.68:8083/api/invoices/id/{invoicesId} = 
	Returns a invoice with that invoice id from the database or recieve an error message JSON.

DELETE Request: http://70.77.64.68:8083/api/invoices/id/{invoiceId} = 
	Enter invoice id in brackets to delete the invoice from the database or receive error message JSON object.

POST Request: http://70.77.64.68:8083/api/invoices = 
	Send invoices w/o invoice id or 0 for invoice Id and invoice object JSON object as a POST Request to save invoice to database system.

PUT Request: http://70.77.64.68:8083/api/invoices = 
	Send invoice w invoice id JSON object as a PUT Request to update invoice in the database system.

---------------------------------------------------------------------------------------------------------------------------------------------

InvoiceItem REST endpoints configured:

GET Request: http://70.77.64.68:8083/api/invoiceitems = 
	Returns all invoiceitems from the database

GET Request: http://70.77.64.68:8083/api/invoiceitems/{invoiceid} = 
	Returns all invoiceitems that are attached to that invoiceid from the database or recieve an error message JSON.

GET Request: http://70.77.64.68:8083/api/invoiceitems/id/{invoiceitemsId} = 
	Returns a invoiceitem with that invoiceitem id from the database or recieve an error message JSON.

DELETE Request: http://70.77.64.68:8083/api/invoiceitems/id/{invoiceId} = 
	Enter invoiceitem id in brackets to delete the invoiceitem from the database or receive error message JSON object.

POST Request: http://70.77.64.68:8083/api/invoiceitems = 
	Send invoiceitem w/o invoiceitem id or 0 for invoiceitem Id and invoice object JSON object as a POST Request to save invoice to invoiceitems system.

PUT Request: http://70.77.64.68:8083/api/invoiceitems = 
	Send invoiceitem w invoiceitem id JSON object as a PUT Request to update invoice in the database system.


---------------------------------------------------------------------------------------------------------------------------------------------

EdgeProfile REST endpoints configured:

GET Request: http://70.77.64.68:8083/api/edgeprofiles = 
	Returns all edgeprofiles from the database

GET Request: http://70.77.64.68:8083/api/edgeprofiles/{edgeprofilesid} = 
	Returns edgeprofile that is attached to that edgeprofilesid from the database or recieve an error message JSON.

DELETE Request: http://70.77.64.68:8083/api/edgeprofiles/{edgeprofilesid} = 
	Enter edgeprofile id in brackets to delete the edgeprofile from the database or receive error message JSON object.

POST Request: http://70.77.64.68:8083/api/edgeprofiles = 
	Send edgeprofile w/o edgeprofile id or 0 for edgeprofile Id object JSON object as a POST Request to save edgeprofile to database system.

PUT Request: http://70.77.64.68:8083/api/edgeprofiles = 
	Send edgeprofile w edgeprofile id JSON object as a PUT Request to update invoice in the database system.

----------------------------------------------------------------------------------------------------------------------------------------------

Image REST endpoints configrued:

GET Request: http://70.77.64.68:8083/api/images/id/{imageId} =
	Return image resource with image type

POST Request: http://70.77.64.68:8083/api/images =
	Upload image with form data with two key/value pairs. file : multipartfile ~ projectId : int

DELETE Request: http://70.77.64.68:8083/api/images/id/{imageId} =
	Deletes image from database and drive with image id passed through. 


