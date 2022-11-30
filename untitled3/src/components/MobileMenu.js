import React, {useState, useEffect} from "react";

function MobileMenu() {
    const [menuState,setMenuState] = useState(true);

    const handleMenuClick = (e) => {
        setMenuState(prevState => !prevState);
    }
    return (
        <>
            <section className="mobile">
                <header className="mobileMenu">
                    <a onClick={e => handleMenuClick(e)} href="#" className="open-menu" hidden={menuState}>Open menu</a>
                    <nav>
                        <ul hidden={!menuState}>
                            <li><a href="#">O nas</a></li>
                            <li><a href="#">Zespół</a></li>
                            <li><a href="#">Produkty</a></li>
                            <li><a href="#">Kontakt</a></li>
                        </ul>
                        <a onClick={e => handleMenuClick(e)} href="#" className="close-menu" hidden={!menuState}>Zamknij menu</a>
                    </nav>
                </header>
            </section>
        </>
    )
}

export default MobileMenu;