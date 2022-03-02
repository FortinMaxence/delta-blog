export default function Article(props) {
    if(props.articleDisplay){
        return (
            <div className="article">
                <div className='article_container'>
                    <div className='article_text'>
                    <h2 className='article_title'>{props.data.title}</h2>
                        <h3 className='article_category'>Catégorie : {props.data.category}</h3>
                        <p className="article_content">{props.data.content}</p>
                        
                        <div className="article_bottom">
                            <div className="article_bottom_right">
                                <h3 className='article_author_and_date'>Écrit par {props.data.author} le {props.data.creationDate} à {props.data.creationHour}</h3>
                                <button className="article_back" onClick={event => props.seeArticle(props.data)}>Retour</button>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(<div></div>)
    }
    
}