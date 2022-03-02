package com.esiea.deltablog.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "articles")
public class Article {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	private String category;
	private String author;
	private String creationdate;
	private String creationhour;
	private String content;
	
	@JsonIgnore
	@ManyToMany(mappedBy = "articles")
    private List<Category> categories = new ArrayList<>();
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getCreationDate() {
		return creationdate;
	}

	public void setCreationDate(String creationdate) {
		this.creationdate = creationdate;
	}

	public String getCreationHour() {
		return creationhour;
	}

	public void setCreationHour(String creationhour) {
		this.creationhour = creationhour;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Article() {
		
	}
	
	public Article(Long id, String title, String category, String author, String creationdate, String creationhour, String content) {
		super();
		this.id = id;
		this.title = title;
		this.category = category;
		this.author = author;
		this.creationdate = creationdate;
		this.creationhour = creationhour;
		this.content = content;
	}
}
