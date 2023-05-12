import { Link } from "react";
export function Product(props) {
    const { product, index } = props;
    return (
        <div key={index}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            {/* <p>{product.description}</p> */}
            <p>{product.price}</p>
            <Link to={`/products/${product.id}`}>View Details</Link>
        </div>
    );
}
