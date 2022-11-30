import React, {useState} from "react";

function ShopListPresentional({state, handleAddProduct}) {
    const [productName, setProductName] = useState("");
    const [id, setId] = useState(1);

    function increaseId() {
        setId(prevState => {
            return prevState + 1;
        })
    }

    return (
        <div>
            <input type="text" value={productName} onChange={e => setProductName(e.target.value)}/>
            <button onClick={e => {
                handleAddProduct(e, id, productName, 1)
                increaseId();
            }}>Dodaj produkt</button>
            <ol>
                {state.products.map(e => {
                    return (
                        <>
                            <li key={"list-element-" + e.id}>{e.name} (ID:{e.id}) x {e.quantity}</li>
                            <button key={"button-" + e.id}>Dodaj</button>
                        </>)
                })}
            </ol>
        </div>
    )
}

export default ShopListPresentional;