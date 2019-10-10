import React from 'react';
import "./CollectionItem.scss";
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { addCartItem } from '../../redux/Cart/CartAction';


const CollectionItem = ({ item, addItem }) => {

   const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div className="image"
                style={{ backgroundImage: `url(${imageUrl})`}} /> 
                <div className="collection-footer">
                    <span className="name">{name}</span>
                    <span className="price">{price}</span>
                </div>
                <Button className="button" inverted onClick={() => addItem(item)}>Add to cart</Button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
