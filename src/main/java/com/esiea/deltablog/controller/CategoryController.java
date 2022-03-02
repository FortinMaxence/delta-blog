package com.esiea.deltablog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.esiea.deltablog.model.Article;
import com.esiea.deltablog.model.Category;
import com.esiea.deltablog.service.CategoryService;
import com.esiea.deltablog.service.NotFoundException;
import com.esiea.deltablog.service.ArticleService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("api/private/category")
public class CategoryController {

	@Autowired
	private CategoryService categoryService;
	
	@GetMapping("")
	public Iterable<Category> getCategories(){
		return categoryService.getCategories();
	}
	
	@GetMapping("/name/{name}")
	public ResponseEntity<Category> getCategoryByName(@PathVariable("name") String name) {
		try {
			Category p = categoryService.getCategoryByName(name);
			return new ResponseEntity<Category>(p, HttpStatus.OK);
		} catch(NotFoundException e) {
			return new ResponseEntity<Category>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@PostMapping("")
	public Category createCategory(@RequestBody Category Category) {
		return categoryService.upsert(Category);
		
	}
}
