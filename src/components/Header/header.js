import './header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="header__nav">
                <div className="header__nav-logo">
                    <img src="logos/logo.png" alt="logo" width="70" height="70" />
                </div>
                <div className="header__nav-pages">
                    <button type="button" className="header__page">
                        <NavLink exact to="/">Home</NavLink>
                    </button>
                    <button type="button" className="header__page">
                        <NavLink to="/catalog">Catalog</NavLink>
                    </button>
                    <button type="button" className="header__page">
                        <NavLink to="/cart">Cart</NavLink>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
