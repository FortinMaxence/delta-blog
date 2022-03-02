package com.esiea.deltablog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

import com.esiea.deltablog.model.Article;
import com.esiea.deltablog.model.Category;
import com.esiea.deltablog.service.NotFoundException;
import com.esiea.deltablog.service.ArticleService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("api/private/article")
public class ArticleController {
	
	@Autowired
	private ArticleService articleService;
	
	@GetMapping("")
	public Iterable<Article> getArticles() {
		return articleService.getArticles();
	}
	
	@GetMapping("/{id}")
	//@RequestMapping(method = RequestMethod.GET, value="/article/{id}")
	public ResponseEntity<Article> getArticle(@PathVariable("id") Long id) {
		try {
			Article p = articleService.getArticle(id);
			return new ResponseEntity<Article>(p, HttpStatus.OK);
		} catch (NotFoundException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@GetMapping("/category/{category}")
	public ResponseEntity<Iterable<Article>> getArticlesByCategory(@PathVariable("category") String category) {
		try {
			Iterable<Article> p = articleService.getArticlesByCategory(category);
			return new ResponseEntity<Iterable<Article>>(p, HttpStatus.OK);
		} catch(NotFoundException e) {
			return new ResponseEntity<Iterable<Article>>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@PostMapping("")
	public Article createArticle(@RequestBody Article Article) {
		return articleService.upsert(Article);
		
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteArticle(@PathVariable("id") Long id) {
		try {
			articleService.deleteArticle(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (NotFoundException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@PutMapping("")
	public Article replaceArticle(@RequestBody Article Article) {
		return articleService.upsert(Article);
	}
	
	@PatchMapping("")
	public ResponseEntity<Article> partialReplaceArticle(@RequestBody Article Article) {
		
		try {
			Article existingArticle = articleService.getArticle(Article.getId());
			if(Article.getTitle() != null && Article.getTitle().equals(existingArticle.getTitle())) {
				existingArticle.setTitle(Article.getTitle());
			}
			
			if(Article.getCategory() != null && Article.getCategory().equals(existingArticle.getCategory())) {
				existingArticle.setCategory(Article.getCategory());
			}
			
			if(Article.getAuthor() != null && Article.getAuthor().equals(existingArticle.getAuthor())) {
				existingArticle.setAuthor(Article.getAuthor());
			}
			
			if(Article.getContent() != null && Article.getContent().equals(existingArticle.getContent())) {
				existingArticle.setContent(Article.getContent());
			}
			
			existingArticle = articleService.upsert(existingArticle);
			return new ResponseEntity<>(existingArticle, HttpStatus.OK);
		} catch (NotFoundException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
