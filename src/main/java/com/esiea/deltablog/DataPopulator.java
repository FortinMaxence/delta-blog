package com.esiea.deltablog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.esiea.deltablog.model.Article;
import com.esiea.deltablog.repository.ArticleRepository;

@Component
public class DataPopulator implements CommandLineRunner{
	
	@Autowired
	private ArticleRepository articleRepository;
	
	@Override
	public void run(String... args) throws Exception {
		//Article a1 = new Article(Long.valueOf(1), "Un premier article", "Sport", "Maxence FORTIN", "01/03/2022", "14:02", "Loremmmmm");
		//Article a2 = new Article(Long.valueOf(2), "Un second!", "Géopolitique", "Paul BODIN", "28/01/2022", "09:15", "Ipssuuuuuuu");
		
		//articleRepository.save(a1);
		//articleRepository.save(a2);
	}

}
