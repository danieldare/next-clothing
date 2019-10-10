import React from 'react';
import { Link } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as Logo} from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';

const Header = (props) => {
    const { currentUser , hidden } =  props;
    return ( 
        <div className="header">
            <Link to="/"><Logo className="logo" /></Link>
            <div className="options">
                <Link className="option" to="/shop" >SHOP</Link>
                <Link className="option" to="/contact" >CONTACT</Link>
                {
                    currentUser 
                    ? 
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    : 
                    <Link className="option" to="/auth" >SIGNIN</Link>
                }
                <CartIcon />
            </div>
            {
                !hidden && <CartDropDown />
            }
            
        </div>
    )
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
