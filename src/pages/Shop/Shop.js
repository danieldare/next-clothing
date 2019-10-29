import React, { useEffect , useState} from "react";
import { connect } from  "react-redux";
import { Route } from "react-router-dom"; 
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import Collection from "../../components/Collection/Collection";
import { firestore, convertCollectionSnapShotMap } from "../../firebase/firebase.utils"
import { updateCollections } from "../../redux/Shop/ShopActions";
import WithSpiner from "../../components/WithSpinner/WithSpiner";

const CollectionsOverviewWithSpinner = WithSpiner(CollectionOverview)
const CollectionWithSpinner = WithSpiner(Collection)

function ShopPage({match, updateCollections}){
    const [state, setState] = useState({
        isLoading: true
    });

    useEffect(() => {
        // let unsubcribeFromSnapShot = null;
        
        const collectionRef = firestore.collection("collections");
        // Observables-based approach
        // unsubcribeFromSnapShot = collectionRef.onSnapshot( async snapShot => {
        //     // The method converts the snapShot into a normalized data
        //     const collectionsMap = convertCollectionSnapShotMap(snapShot);
        //     updateCollections(collectionsMap);
        //     setState({ isLoading: false })
        // });

        // promised-based approach
        collectionRef.get().then(snapShot => {
            // The method converts the snapShot into a normalized data
            const collectionsMap = convertCollectionSnapShotMap(snapShot);
            updateCollections(collectionsMap);
            setState({ isLoading: false })
        });

        // return () => {
        //     unsubcribeFromSnapShot();
        // }
        
    })
        return (  
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={state.isLoading}  {...props} /> } />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionWithSpinner isLoading={state.isLoading} {...props} />} />
            </div>
        );
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);