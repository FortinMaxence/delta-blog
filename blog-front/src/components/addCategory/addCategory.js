export default function AddCategory(props) { 
    function submitCategory() {
        let category = {
            id:0,
            name: document.getElementById("name").value
        }
        props.submitCategory(category);
        props.displayAddCategory();
    }

    if(props.addCategoryDisplay){
        return (
            <div className="addCategory">
                <div className='addCategory_container'>
                    <div className="addCategory_container_text">
                        <h2 className='addCategory_title'>AJOUTER UNE CATÉGORIE</h2>
                        <div className="addCategory_input_container">
                            <label>NOM DE LA CATÉGORIE : {" "} </label>
                            <input
                                className="addCategory__input" 
                                id="name"
                                type="text"
                                placeholder="Nom de la catégorie..." 
                                name="name"
                            />
                        </div>
    
                        <div className="addCategory_buttons">
                            <button className="addCategory_add" onClick={event => submitCategory()}>
                                Ajouter la catégorie</button>
                            <button className="addCategory_back" onClick={event => props.displayAddCategory()}>Retour</button>
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