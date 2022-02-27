import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import Articles from './components/articles/articles';
import Article from './components/article/article';
import Controller from './components/controller/controller'
import AddArticle from './components/addArticle/addArticle'
import AddCategory from './components/addCategory/addCategory'

import './App.css';
import './components/articles/articles.css'
import './components/article/article.css'
import './components/controller/controller.css'
import './components/addArticle/addArticle.css'
import './components/addCategory/addCategory.css'
import Header from './components/Header';

import dataTest from './data'
import dataCategory from './datacategory'

function App() {

  const [allArticles, setAllArticles] = useState([]);
  const [selectedArticle, setArticle] = useState({
    id: 0,
        title: "",
        author: "",
        creationDate: "",
        creationHour: "",
        content: "",
        category: "",
  });
  const [articleDisplay, setDisplayArticle] = useState(false);
  const [addArticleDisplay, setDisplayAddArticle] = useState(false);
  const [addCategoryDisplay, setDisplayAddCategory] = useState(false);
  const [selectedCategory, setCategory] = useState("Tous");
  const [addArticle, setAddArticle] = useState({
        id: 0,
        title: "",
        author: "",
        creationDate: "",
        creationHour: "",
        content: "",
        category: "",
  });

  // check if url uses a secured protocol
  const sampleUrl = "https://via.placeholder.com/200/e9fff4";

  function validateUrl(url) {
    const parsed = new URL(url);
    return ["https:", "http:"].includes(parsed.protocol);
  }

  let allCategories = dataCategory;

  //Update the selected category
  function updateCategory(new_category){
    setCategory(new_category);
  }

  //Update the selected category
  function seeArticle(article){
      setArticle(article);
      setDisplayArticle(!articleDisplay);
      console.log(articleDisplay);
  }

  //Display the add article window
  function displayAddArticle(){
      setDisplayAddArticle(!addArticleDisplay);
  }

  //Display the add category window
  function displayAddCategory(){
    console.log(addCategoryDisplay);
    setDisplayAddCategory(!addCategoryDisplay);
}

  //Update list of articles displayed when category is changed
  useEffect(() =>{
    let articles = loadArticles();
    setAllArticles(articles);
  }, [selectedCategory]);

  // Load articles according to the category filter 
  function loadArticles(){
    let articles = [];
    for (let i = 0; i < dataTest.length; i++){
        if(dataTest[i].category == selectedCategory || selectedCategory == "Tous")
          articles.push(dataTest[i]);
    }
    return articles;
  }
  
  
  return (
    <div className="App">
      
      <Header />
      <AddArticle
            categories={allCategories}
            addArticle={addArticle}
            addArticleDisplay={addArticleDisplay}
            displayAddArticle={displayAddArticle}
      />
      <AddCategory
            addCategoryDisplay={addCategoryDisplay}
            displayAddCategory={displayAddCategory}
      />

      <Article
          data={selectedArticle}
          articleDisplay={articleDisplay}
          seeArticle={seeArticle}
      />
      
      <Controller
            data={allCategories}
            updateCategory={updateCategory}
            displayAddArticle={displayAddArticle}
            displayAddCategory={displayAddCategory}
      />
      <main>
        <Articles 
            data={allArticles}
            seeArticle={seeArticle}
        />
      </main>
    </div>
  );
}

export default App;
