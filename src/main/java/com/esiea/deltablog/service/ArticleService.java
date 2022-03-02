package com.esiea.deltablog.service;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esiea.deltablog.model.Article;
import com.esiea.deltablog.model.Category;
import com.esiea.deltablog.repository.ArticleRepository;

@Service
public class ArticleService {
	
	Logger logger = LoggerFactory.getLogger(ArticleService.class);
	
	@Autowired
	private ArticleRepository articleRepository;
	
	public Iterable<Article> getArticles() {
		return articleRepository.findAll();
	}

	public Article getArticle(Long id) throws NotFoundException {
		Optional<Article> resultat = articleRepository.findById(id);
		if(resultat.isPresent()) {
			return resultat.get();
		} else {
			throw new NotFoundException();
		}
			
	}
	
	public Iterable<Article> getArticlesByCategory(String category) throws NotFoundException {
		Optional<Iterable<Article>> resultat = articleRepository.findByCategory(category);
		if(resultat.isPresent()) {
			return resultat.get();
		} else {
			throw new NotFoundException();
		}
	}

	public Article upsert(Article Article) {
		return articleRepository.save(Article);
	}

	public void deleteArticle(Long id) throws NotFoundException {
		Optional<Article> resultat = articleRepository.findById(id);
		if(resultat.isPresent()) {
			articleRepository.deleteById(id);
		} else {
			throw new NotFoundException();
		}
		
		
	}
	
	
}
