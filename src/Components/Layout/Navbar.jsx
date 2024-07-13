import React, { useEffect, useState } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { Link, useLocation } from 'react-router-dom';
import '../../Style/Layout/Navbar.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const [navbarToggle, setNavbarToggle] = useState(true);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        setNavbarToggle(true);
    }, [pathname]);

    const item = useSelector((state) => state.AddCard.addCartData);

    let selectItem = 0;

    for (let i = 0; i < item.length; i++) {
        selectItem += (item[i].quantity);
    }

    const location = useLocation();

    const handleClick = () => {
        setNavbarToggle(!navbarToggle);
    };
    return (
        <>
            <div className="Navbar_container">
                <div className="navbar_Title_box" onClick={() => navigate('/')}>
                    <p>MY STORE</p>
                </div>
                <div className="navbar_mobile_navbarOpenLink">
                    <HiOutlineBars3 size={30} onClick={handleClick} />
                </div>

                <div className={`Navbar_link ${navbarToggle ? 'navbar_mobile_navbarOpen' : ''}`}>
                    <ul>
                        <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">HOME</Link></li>
                        <li className={location.pathname === '/about' ? 'active' : ''}><Link to="/about">ABOUT</Link></li>
                        <li className={location.pathname === '/contact' ? 'active' : ''}><Link to="/contact">CONTACT</Link></li>
                        <li className={location.pathname === '/product' ? 'active' : ''}><Link to="/product">PRODUCTS</Link></li>
                        <li className={location.pathname === '/login' ? 'active' : ''}> <Link to="/login">LOGIN</Link> </li>

                        <li className={location.pathname === '/cart' ? 'active' : ''}>
                            <Link to="/cart"><TiShoppingCart size={30} /> <sup>{selectItem}</sup></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
