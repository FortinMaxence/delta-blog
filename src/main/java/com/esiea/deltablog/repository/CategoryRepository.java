package com.esiea.deltablog.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.esiea.deltablog.model.Article;
import com.esiea.deltablog.model.Category;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long> {

	//Requete dérivée
	public Optional<Category> findByName(String name);
}
