import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShopIcon from '@material-ui/icons/Shop';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {
    const [{ cart, user }] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    };


    return (
        <nav className="header">
            {/* Logo */ }
            <Link to="/">
            <img 
            className="header__logo" 
            src='https://i.imgur.com/ywvi9Oa.png'
            alt="Playzon" 
            />
            </Link>
            {/* Search Bar */ }
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div>

            {/* Links */}
            <div className="header__nav">
                {/* 1° Link */ }

                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo">{user?'Sign out':'Sign in'}</span>
                    </div>
                </Link>

                {/* 2° Link */ }

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 4° Link */ }

                <Link to="/checkout" className="header__link">
                    <div className="header__optionCart">
                        {/* icon */ }
                        <ShopIcon />
                        {/* no. items */ }
                        <span className="header__optionLineTwo header__cartCount">{cart?.length}</span>
                    </div>
                </Link>


            </div>
            {/* Cart */ }
        </nav>
    )
    
}

export default Header
