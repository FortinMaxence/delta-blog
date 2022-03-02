package com.esiea.deltablog.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esiea.deltablog.model.Category;
import com.esiea.deltablog.model.Article;
import com.esiea.deltablog.repository.CategoryRepository;

@Service
public class CategoryService {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	public Iterable<Category> getCategories() {
		return categoryRepository.findAll();
	}
	
	public Category getCategoryByName(String name) throws NotFoundException {
		Optional<Category> resultat = categoryRepository.findByName(name);
		if(resultat.isPresent()) {
			return resultat.get();
		} else {
			throw new NotFoundException();
		}
	}
	
	public Category upsert(Category Category) {
		return categoryRepository.save(Category);
	}
}
