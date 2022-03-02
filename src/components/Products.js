import '../products.css'

export default function Products(props) {
    
    const productsElements = props.data.map(i => <div
        key={i.id}
        className={i.cost === 500 ? "products_item products_item--500" : "products_item"}
    >
        <img src={props.validateUrl(props.sampleUrl) ? props.sampleUrl : ""} alt="Aperçu du produit"></img>
        <h3>Produit: {i.name}</h3>
        <p>Description: {i.description}</p>
        <p>Prix: {i.cost}</p>
    </div>);
    
    return (
        <div className="products">
            <h2 className="products_title">Produits disponibles</h2>
            <div className="products_container">
                {productsElements}
            </div>
        </div>
    )
}
