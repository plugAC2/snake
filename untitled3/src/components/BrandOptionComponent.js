import React from "react";

function BrandOptionComponent({brands}) {
    return (
        <>
            {brands.map(x => <option key={x + "ujngoiaeujnioungade"} value={x}>{x}</option>)}
        </>
    )
}

export default BrandOptionComponent;