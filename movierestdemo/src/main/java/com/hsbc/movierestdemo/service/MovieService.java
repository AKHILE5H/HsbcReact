package com.hsbc.movierestdemo.service;

import java.util.ArrayList;
import java.util.List;


import com.hsbc.movierestdemo.domain.Movie;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;


@Service
public class MovieService {
	private Logger logger = LoggerFactory.getLogger(MovieService.class);

	private List<Movie> movies = new ArrayList<>();

	public MovieService() {
		movies.add(new Movie("1", "Barbie", "5"));
		movies.add(new Movie("2", "John Carter", "10"));
	}

	public List<Movie> search() {
		return movies;
	}

	public Movie search(String id) {

		logger.info("in movie search..");
		return movies.stream().filter((m) -> m.getId().equals(id)).findFirst().get();
	}

	public Movie add(Movie m) {
		movies.add(m);
		return m;
	}

	public Movie update(String id, Movie movie) {
		delete(search(id).getId());
		movie.setId(id);
		movies.add(movie);
		return movie;
	}

	public Movie delete(String id) {
		for (Movie movie : movies) {
			if (movie.getId().equals(id)) {
				movies.remove(movie);
				return movie;
			}
		}
		return null;
	}
}
