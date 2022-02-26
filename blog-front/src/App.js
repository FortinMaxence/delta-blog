import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import Articles from './components/articles/articles';
import Controller from './components/controller/controller'

import './App.css';
import './components/articles/articles.css'
import './components/controller/controller.css'
import Header from './components/Header';

import dataTest from './data'
import dataCategory from './datacategory'

function App() {

  const [allArticles, setAllArticles] = useState([]);
  const [selectedCategory, setCategory] = useState("Tous");
  const [posting, setPosting] = useState(false);
  const [inputInvalid, setInputInvalid] = useState(false);

  // check if url uses a secured protocol
  const sampleUrl = "https://via.placeholder.com/200/e9fff4";

  function validateUrl(url) {
    const parsed = new URL(url);
    return ["https:", "http:"].includes(parsed.protocol);
  }

  // initialize invalidInput state to false to handle error messages
  function initInvalidInput() {
    setInputInvalid(false);
  }

  let allCategories = dataCategory;

  //Update the selected category
  function updateCategory(new_category){
    setCategory(new_category);
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
      <Controller
            data={allCategories}
            updateCategory={updateCategory}
      />

      <main>
        <Articles 
            data={allArticles}
            //seeProduct={seeArticle}
            validateUrl={validateUrl}
            url={sampleUrl}
          />
      </main>
    </div>
  );
}

export default App;
