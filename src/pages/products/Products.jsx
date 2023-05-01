import { useEffect, useState } from "react";

export function Products() {
    const [cart, setCart] = useState(0);
    const [fav, setFav] = useState(0);
    useEffect(() => {
        console.log(cart, fav);
    }, [cart, fav]);
    return (
        <div>
            <h1>Products</h1>
            <button tid={"${cart}"} onClick={() => setCart(cart + 1)}>
                Click {cart}
            </button>
            <button tid={"${fav}"} onClick={() => setFav(fav + 1)}>
                Click{fav}
            </button>
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
