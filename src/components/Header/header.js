function Header() {
    return (
        <header>
            <div className="header">
                <nav className="header__nav">
                    <div className="header__nav-logo">
                        <img src="logos/logo.png" alt="logo" width="70" height="70" />
                    </div>
                    <div className="header__nav-pages">
                        <h2><button type="button" className="header__page"><a href="#">Home</a></button></h2>
                        <h2><button type="button" className="header__page"><a href="#">Catalog</a></button></h2>
                        <h2><button type="button" className="header__page"><a href="#">Cart</a></button></h2>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
