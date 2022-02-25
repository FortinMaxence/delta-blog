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

  //const [allArticles, setAllProducts] = useState([]);
  const [posting, setPosting] = useState(false);
  const [inputInvalid, setInputInvalid] = useState(false);

  // fetch articles and categories data from API
  /*useEffect(() => {
    fetch('http://localhost:9000/api/private/article')
    .then(res => res.json())
    .then(data => {
      setAllProducts(data);
    })
    .catch(e => console.log(e.toString()));
    
  });*/

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
  
  const allArticles = dataTest;
  console.log(allArticles);
  const allCategories = dataCategory;
  console.log(allCategories);
  
  return (
    <div className="App">
      
      <Header />

      <main>
        <Controller
            data={allCategories}
        />
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
