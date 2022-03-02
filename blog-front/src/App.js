import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import Articles from './components/articles/articles';
import Article from './components/article/article';
import Controller from './components/controller/controller'
import AddArticle from './components/addArticle/addArticle'
import AddCategory from './components/addCategory/addCategory'
import UpdateArticle from './components/updateArticle/updateArticle'

import './App.css';
import './components/articles/articles.css'
import './components/article/article.css'
import './components/controller/controller.css'
import './components/addArticle/addArticle.css'
import './components/addCategory/addCategory.css'
import './components/updateArticle/updateArticle.css'
import Header from './components/Header';

function App() {

  const [allArticles, setAllArticles] = useState([]);
  const [allCategories, setAllCategories] = useState(["Tous"]);
  
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
  const [updateArticleDisplay, setDisplayUpdateArticle] = useState(false);
  
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
  const [updateArticle, setUpdateArticle] = useState({
    id: 0,
    title: "",
    author: "",
    creationDate: "",
    creationHour: "",
    content: "",
    category: "",
});
  const [addCategory, setAddCategory] = useState({
    id: 0,
    name: ""
});

  const [posting, setPosting] = useState(false);
  const [toDelete, setToDelete] = useState({deleting: false});
  const [update, setUpdate] = useState(false);

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
    setDisplayAddCategory(!addCategoryDisplay);
  }

  //Display the update article window
  function displayUpdateArticle(article){
    setArticle(article);
    setDisplayUpdateArticle(!updateArticleDisplay);
  }

  //Update list of articles displayed when category is changed
  useEffect(() =>{
    if(selectedCategory == "Tous"){
      fetch('http://localhost:9000/api/private/article')
      .then(res => res.json())
      .then(data => {
        setAllArticles(data.reverse());
      })
      .catch(e => console.log(e.toString()));
    }
    else{
      fetch(`http://localhost:9000/api/private/article/category/${selectedCategory}`)
      .then(res => res.json())
      .then(data => {
        setAllArticles(data.reverse());
      })
      .catch(e => console.log(e.toString()));
    }
    
  }, [selectedCategory, posting, toDelete, update]);

  //get list of categories
  useEffect(() =>{
    fetch('http://localhost:9000/api/private/category')
      .then(res => res.json())
      .then(data => {
        data.unshift({id: 0, name: 'Tous'});
        setAllCategories(data);
      })
      .catch(e => console.log(e.toString()));
  }, [selectedCategory, allCategories]);

  // triggers submit and send POST request to add article
  function submitArticle(article) {
    setPosting(true);
    setAddArticle(article);
  }

  // Add article
  useEffect(() =>{
    if(posting){
      fetch('http://localhost:9000/api/private/article', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(addArticle)
    })
    .then(res => res.json())
    .then(data => {
      setPosting(false);
    })
    .catch(e => console.log(e.toString()));
    }
    
  }, [addArticle]);

  // triggers submit and send POST request to add category
  function submitCategory(category) {
    setPosting(true);
    setAddCategory(category);
  }

  // Add category
  useEffect(() =>{
    if(posting){
      fetch('http://localhost:9000/api/private/category', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(addCategory)
    })
    .then(res => res.json())
    .then(data => {
      setPosting(false);
    })
    .catch(e => console.log(e.toString()));
    }
    
  }, [addCategory]);

  // triggers deletion and send DELETE request
  function deleteArticle(event, id) {
    event.stopPropagation();

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => {
      if (result.isConfirmed) {
        setToDelete({deleting: true, articleId: id});

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      };
    });
  }

  useEffect(() => {
    if (toDelete.deleting) {
      fetch(`http://localhost:9000/api/private/article/${toDelete.articleId}`, {
        method: "DELETE"
      })
      .then(() => {
        setToDelete({deleting: false, productId: -1});
      })
      .catch(e => console.log(e.toString()));
    }
  }, [toDelete])

  // triggers submit and send PUT request to update article
  function modifyArticle(article) {
    setUpdate(true);
    setUpdateArticle(article);
  }

  // Update article
  useEffect(() =>{
    if(update){
      fetch('http://localhost:9000/api/private/article', {
        method: "PUT",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateArticle)
    })
    .then(res => res.json())
    .then(data => {
      setUpdate(false);
    })
    .catch(e => console.log(e.toString()));
    }
    
  }, [updateArticle]);
  
  
  return (
    <div className="App">
      
      <Header />
      <AddArticle
            categories={allCategories}
            submitArticle={submitArticle}
            addArticleDisplay={addArticleDisplay}
            displayAddArticle={displayAddArticle}
      />
      <AddCategory
            addCategoryDisplay={addCategoryDisplay}
            submitCategory={submitCategory}
            displayAddCategory={displayAddCategory}
      />
      <UpdateArticle
          data={selectedArticle}
          categories={allCategories}
          modifyArticle={modifyArticle}
          updateArticleDisplay={updateArticleDisplay}
          displayUpdateArticle={displayUpdateArticle}
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
            deleteArticle={deleteArticle}
            displayUpdateArticle={displayUpdateArticle}
        />
      </main>
    </div>
  );
}

export default App;
