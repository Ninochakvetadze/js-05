import { useEffect, useState, useContext } from "react";
// import { _get } from "../services";
import axios from "axios";
import { Loader } from "../../globalComponents";
export function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const apiData = await axios.get(
                "https://fakestoreapi.com/products"
            );
            if (apiData.status === 200) {
                setProducts(apiData.data);
            }
        }
        fetchData();
    }, []);
    return (
        <div>
            <h1>Products</h1>
            <div id="products">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <div key={index}>
                            <img src={product.image} alt={product.title} />
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </div>
                    ))
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    );
}

// export function Products() {
//     const [countBox, setCountBox] = useState(0);
//     const addOne = () => {
//         setCountBox(countBox + 1);
//     };
//     useEffect(() => {
//         console.log("Products updated", countBox);
//     }, [countBox]);
//     return (
//         <div>
//             <h1>Products</h1>
//             <button onClick={addOne}>Click {countBox}</button>
//         </div>
//     );
// }
