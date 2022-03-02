import {useEffect, useState} from 'react';

import data from './data.js';
import Products from './components/Products.js'

import './App.css';


function App() {

  const [allProducts, setAllProducts] = useState([]);
  //const [allCategories, setAllCategories] = useState([]);

  // useEffect is used to interact w/ data outside of the react app
  // fetch products from the API and update products state
  useEffect(() => {
    fetch("http://localhost:9000/api/private/product")
    .then(res => res.json())
    .then(data => setAllProducts(data))
    .catch(e => console.log(e.toString()));
  }, []);

  const dataSample = data;
  const sampleUrl = "https://via.placeholder.com/200/e9fff4";

  //check if url uses a secured protocol
  function validateUrl(url) {
    const parsed = new URL(url);
    return ["https:", "http:"].includes(parsed.protocol);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>ESIEA INTECH | Fullstack project</p>
      </header>
      <main>
          <Products data={dataSample} validateUrl={validateUrl} sampleUrl={sampleUrl}></Products>
      </main>
    </div>
  );
}

export default App;
