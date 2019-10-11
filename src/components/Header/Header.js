import React from 'react';
import { Link } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as Logo} from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser, selectCartHidden } from '../../redux/User/UserSelector';

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

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser, 
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
