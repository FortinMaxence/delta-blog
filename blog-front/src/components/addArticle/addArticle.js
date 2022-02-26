export default function AddArticle(props) {    
    let categoriesElements = props.categories.map((item, i) => {
		if(item.name != "Tous"){
            return (
                <option key={i}>{item.name}</option>
            )
        }
	}, this);

    if(props.addArticleDisplay){
        return (
            <div className="addArticle">
                <div className='addArticle_container'>
                    <div className="addArticle_container_text">
                        <h2 className='addArticle_title'>AJOUTER UN ARTICLE</h2>
                        <div className="addArticle_input_container">
                            <label>TITRE : {" "} </label>
                            <input
                                className="addArticle__input" 
                                type="text"
                                placeholder="Titre de l'article..." 
                                name="title"
                            />
                        </div>
                        
                        <div className="addArticle_input_container">
                            <label>CATÉGORIE : {" "} </label>
                            <select id="category_selector" className='addArticle__select_category'>
                                {categoriesElements}
                            </select>
                        </div>
                        
                        
                        
                        <div className="addArticle_input_container">
                            <label>TITRE : {" "} </label>
                                <input
                                    className="addArticle__input" 
                                    type="text"
                                    placeholder="Auteur de l'article..." 
                                    name="author"
                                />
                        </div>
                        
                        <label>CONTENU : {" "} </label>
                        <textarea
                            className="addArticle_content"
                            placeholder="Contenu de l'article..." 
                            name="content"
                        />
    
                        <div className="addArticle_buttons">
                            <button className="addArticle_add">Ajouter l'article</button>
                            <button className="addArticle_back" onClick={event => props.displayAddArticle()}>Retour</button>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
    else{
        return(<div></div>);
    }
    
}