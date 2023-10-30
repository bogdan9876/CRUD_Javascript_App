function Header() {
    return (
        <header className="header">
            <div className="header__nav">
                <div className="header__nav-logo">
                    <img src="logos/logo.png" alt="logo" width="70" height="70" />
                </div>
                <div className="header__nav-pages">
                    <button type="button" className="header__page">
                        <a href="#">Home</a>
                    </button>
                    <button type="button" className="header__page">
                        <a href="#">Catalog</a>
                    </button>
                    <button type="button" className="header__page">
                        <a href="#">Cart</a>
                    </button>
                </div>
            </div>
        </header>
    );
}


export default Header;
