package com.esiea.deltablog.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.esiea.deltablog.model.Article;
import com.esiea.deltablog.model.Category;

@Repository
public interface ArticleRepository extends CrudRepository<Article, Long>{

	//Requete dérivée
	public Optional<Iterable<Article>> findByCategory(String category);
}
