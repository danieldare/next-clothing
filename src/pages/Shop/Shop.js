import React, { Component } from "react";
import ShopData from "./ShopService";
import CollectionPreview from "../../components/PreviewCollection/CollectionPreview";

class ShopPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            collections : ShopData
        }
    }


    render(){
        const { collections } = this.state;
        return (  
            <div className="shop-page">
                {
                    collections.map(({id, ...otherProps }) => (
                        <CollectionPreview  key={id} {...otherProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;