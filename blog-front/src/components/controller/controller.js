export default function Controller(props) {    
    let categoriesElements = props.data.map((item, i) => {
		return (
			<option key={i}>{item.name}</option>
		)
	}, this);

    //Change category
    function updateCategory(){
        var select = document.getElementById("category_selector");
        var new_category = select.options[select.selectedIndex].value;
        props.updateCategory(new_category);
    }

    return (
        <div className="controller">
            <div className='controller__container'>
                <h2 className='controller__category_title'>CATÉGORIE</h2>
                <select id="category_selector" className='controller__select_category' onChange={event => updateCategory()}>
                    {categoriesElements}
                </select>
                <div className='controller__addArticle'>
                    <h3>AJOUTER UN ARTICLE</h3>
                    <button className="controller__addArticle_button">+</button>      
                </div>
                
                <div className='controller__addCategory'>
                    <h3>AJOUTER UNE CATÉGORIE</h3>
                    <button className="controller__addCategory_button">+</button> 
                </div>
                
            </div>
        </div>
    )
}