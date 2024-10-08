package com.hsbc.movierestdemo.domain;


public class Movie {
	private String id;
	private String name;
	private String rating;

	public Movie() {
		// TODO Auto-generated constructor stub
	}

	public Movie(String id, String name, String rating) {
		this.id = id;
		this.name = name;
		this.rating = rating;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	
	public void setName(String name) {
		this.name = name;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	@Override
	public String toString() {
		return "Movie{" +
				"id='" + id + '\'' +
				", name='" + name + '\'' +
				", rating='" + rating + '\'' +
				'}';
	}
}
