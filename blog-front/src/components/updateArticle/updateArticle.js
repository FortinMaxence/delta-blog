export default function UpdateArticle(props) {    
    let categoriesElements = props.categories.map((item, i) => {
		if(item.name != "Tous"){
            return (
                <option key={i}>{item.name}</option>
            )
        }
	}, this);

    if(props.updateArticleDisplay){
        return (
            <div className="addArticle">
                <div className='addArticle_container'>
                    <div className="addArticle_container_text">
                        <h2 className='addArticle_title'>MODIFIER UN ARTICLE</h2>
                        <div className="addArticle_input_container">
                            <label>TITRE : {" "} </label>
                            <input
                                className="addArticle__input" 
                                type="text"
                                defaultValue={props.data.title} 
                                name="title"
                            />
                        </div>
                        
                        <div className="addArticle_input_container">
                            <label>CATÉGORIE : {" "} </label>
                            <select defaultValue={props.data.category}  id="category_selector" className='addArticle__select_category'>
                                {categoriesElements}
                            </select>
                        </div>
                        
                        
                        
                        <div className="addArticle_input_container">
                            <label>TITRE : {" "} </label>
                                <input
                                    className="addArticle__input" 
                                    type="text"
                                    defaultValue={props.data.author} 
                                    name="author"
                                />
                        </div>
                        
                        <label>CONTENU : {" "} </label>
                        <textarea
                            className="addArticle_content"
                            defaultValue={props.data.content} 
                            name="content"
                        />
    
                        <div className="addArticle_buttons">
                            <button className="addArticle_add">Modifier l'article</button>
                            <button className="addArticle_back" onClick={event => props.displayUpdateArticle()}>Retour</button>
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