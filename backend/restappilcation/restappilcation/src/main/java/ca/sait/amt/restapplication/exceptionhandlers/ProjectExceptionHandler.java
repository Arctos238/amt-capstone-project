package ca.sait.amt.restapplication.exceptionhandlers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import ca.sait.amt.restapplication.entity.ErrorResponse;
import ca.sait.amt.restapplication.exceptions.ClientIdNotFoundException;
import ca.sait.amt.restapplication.exceptions.ProjectNotFoundException;

@ControllerAdvice
public class ProjectExceptionHandler {
	
	@ExceptionHandler
	public ResponseEntity<ErrorResponse> handleException(ProjectNotFoundException ex){
		ErrorResponse error = new ErrorResponse();
		error.setMessage(ex.getMessage());
		error.setStatus(HttpStatus.NOT_FOUND.value());
		error.setTimeStamp(System.currentTimeMillis());
		
		return new ResponseEntity<>(error , HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler
	public ResponseEntity<ErrorResponse> handleException(ClientIdNotFoundException ex){
		ErrorResponse error = new ErrorResponse();
		error.setMessage(ex.getMessage());
		error.setStatus(HttpStatus.NOT_ACCEPTABLE.value());
		error.setTimeStamp(System.currentTimeMillis());
		
		return new ResponseEntity<>(error , HttpStatus.NOT_ACCEPTABLE);
	}
	
	@ExceptionHandler
	public ResponseEntity<ErrorResponse> handleException(Exception ex){
		ErrorResponse error = new ErrorResponse();
		error.setMessage(ex.getMessage());
		error.setStatus(HttpStatus.BAD_REQUEST.value());
		error.setTimeStamp(System.currentTimeMillis());
		
		return new ResponseEntity<>(error , HttpStatus.BAD_REQUEST);
	}
}
