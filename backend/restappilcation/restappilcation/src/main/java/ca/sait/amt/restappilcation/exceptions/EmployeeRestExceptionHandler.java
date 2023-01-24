package ca.sait.amt.restappilcation.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


@ControllerAdvice	
public class EmployeeRestExceptionHandler {

	@ExceptionHandler
	public ResponseEntity<EmployeeErrorResponse> handleException(EmployeeNotFoundException ex){
		EmployeeErrorResponse error = new EmployeeErrorResponse();
		error.setMessage(ex.getMessage());
		error.setStatus(HttpStatus.NOT_FOUND.value());
		error.setTimeStamp(System.currentTimeMillis());
		
		return new ResponseEntity<>(error , HttpStatus.NOT_FOUND);
	}
}
