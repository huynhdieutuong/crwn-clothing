import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview';
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/utils';
import { updateCollections } from '../../redux/shop/actions';
import CollectionPage from '../CollectionPage';

const ShopPage = ({ match, updateCollections }) => {
  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot((snapShot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      updateCollections(collectionsMap);
    });
  }, []);

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route
        path={`${match.path}/:collectionUrlParam`}
        component={CollectionPage}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
