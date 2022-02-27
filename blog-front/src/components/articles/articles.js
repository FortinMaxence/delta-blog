export default function Articles(props) {
    
    const articlesElements = props.data.map(i => <div
        key={i.id}
        className="articles_item"
    >
        <h2 className='articles__title'>{i.title}</h2>
        <h3 className='articles__category' >Catégorie : {i.category} </h3>
        <div className='articles__bottom'>
            <div className="articles__bottom_left">
                <h3 className='articles__author_and_date'>Écrit par {i.author} <br></br>le {i.creationDate} à {i.creationHour}</h3>
            </div>
            <div className="articles__bottom_right">
                <button className="articles__seeButton" onClick={event => props.seeArticle(i)}>Voir</button>      
            </div>
            
        </div>
    </div>)

    return (
        <div className="articles">
            <div className='articles__container'>
                {articlesElements}
            </div>
        </div>
    )
}