package com.hsbc.movierestdemo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.NoSuchElementException;

import com.hsbc.movierestdemo.domain.Movie;
import com.hsbc.movierestdemo.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
public class MovieController {
	@Autowired
	private MovieService movieService;

	@GetMapping(value = "/movies")
	public ResponseEntity<List<Movie>> getMovies() {
		return new ResponseEntity<List<Movie>>(movieService.search(), HttpStatus.OK);
	}

	@GetMapping("/movies/{id}")
	public ResponseEntity<Movie> getMovies(@PathVariable("id") String id) {

		return new ResponseEntity<Movie>(movieService.search(id), HttpStatus.OK);
	}

	@PostMapping("/movies")
	public ResponseEntity<Movie> createMovie(@RequestBody Movie movie) {
		return new ResponseEntity<Movie>(movieService.add(movie), HttpStatus.CREATED);
	}

	@PutMapping("/movies/{id}")
	public ResponseEntity<Movie> updateMovie(@PathVariable("id") String id, @RequestBody Movie movie) {
		return new ResponseEntity<Movie>(movieService.update(id, movie), HttpStatus.ACCEPTED);
	}

	@DeleteMapping("/movies/{id}")
	public ResponseEntity<Movie> deleteMovie(@PathVariable("id") String id) {
		return new ResponseEntity<Movie>(movieService.delete(id), HttpStatus.ACCEPTED);
	}

	//@ExceptionHandler(NoSuchElementException.class)
	public ResponseEntity<Object> handleExp(NoSuchElementException ex){

		HashMap<String,Object> body = new HashMap<>();
		body.put("message",ex.getMessage());
	return  new ResponseEntity<>(body,HttpStatus.NOT_FOUND);
	}
}
