export default function AddArticle(props) {    
    let categoriesElements = props.categories.map((item, i) => {
		if(item.name != "Tous"){
            return (
                <option key={i}>{item.name}</option>
            )
        }
	}, this);

    function creationDate(){
        var date = new Date();
        const formatDate = (date)=>{
        let formatted_date = ("0" + (date.getDate())).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear()
        return formatted_date;
        }
        return formatDate(date);
    }

    function creationHour(){
        var dateWithouthSecond = new Date();
        dateWithouthSecond = dateWithouthSecond.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        return dateWithouthSecond;
    }

    function submitArticle() {
        let article = {
            id: 0,
            title: document.getElementById("title").value,
            author: document.getElementById("author").value,
            creationDate: creationDate(),
            creationHour: creationHour(),
            content: document.getElementById("content").value,
            category: document.getElementById("category_selector").value,
        }
        props.submitArticle(article);
        props.displayAddArticle();
    }

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
                                id="title"
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
                            <label>AUTEUR : {" "} </label>
                                <input
                                    className="addArticle__input"
                                    id="author"
                                    type="text"
                                    placeholder="Auteur de l'article..." 
                                    name="author"
                                />
                        </div>
                        
                        <label>CONTENU : {" "} </label>
                        <textarea
                            className="addArticle_content"
                            id="content"
                            placeholder="Contenu de l'article..." 
                            name="content"
                        />
    
                        <div className="addArticle_buttons">
                            <button className="addArticle_add" onClick={event => submitArticle()}>Ajouter l'article</button>
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