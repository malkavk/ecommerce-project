import { Link, NavLink } from 'react-router';
import './Header.css'
import CartIcon from '../assets/images/icons/cart-icon.png'
import SearchIcon from '../assets/images/icons/search-icon.png'
import MobileLogoWhite from '../assets/images/mobile-logo-white.png'
import LogoWhite from '../assets/images/logo-white.png'

export function Header(){
  return(
    <div className="header">
      <div className="left-section">
        <Link to="/" className="header-link">
          <img className="logo"
            src={LogoWhite} />
          <img className="mobile-logo"
            src={MobileLogoWhite} />
        </Link>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src={SearchIcon} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link active" to="/orders">

          <span className="orders-text">Orders</span>
        </NavLink>

        <Link className="cart-link header-link .cart-link.active" to="/checkout">
          <img className="cart-icon" src={CartIcon} />
          <div className="cart-quantity">3</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </div>
  );
}