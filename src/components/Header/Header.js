import React from 'react';
import "./Header.scss";
import { HeaderContainer, LogoContainer, OptionDiv, OptionsContainer, OptionLink} from "./Header.styles";
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
        <HeaderContainer>
            <LogoContainer to="/"><Logo className="logo" /></LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop" >SHOP</OptionLink>
                <OptionLink to="/contact" >CONTACT</OptionLink>
                {
                    currentUser 
                    ? 
                    <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                    : 
                    <OptionLink to="/auth" >SIGNIN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                !hidden && <CartDropDown />
            }
        </HeaderContainer>
    )
};

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser, 
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
