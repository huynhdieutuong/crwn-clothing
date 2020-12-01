import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview';
import withSpinner from '../../components/withSpinner';
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/utils';
import { updateCollections } from '../../redux/shop/actions';
import CollectionPage from '../CollectionPage';

const CollectionPageWithSpinner = withSpinner(CollectionPage);
const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);

const ShopPage = ({ match, updateCollections }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot((snapShot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      updateCollections(collectionsMap);
      setLoading(false);
    });
  }, []);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner loading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionUrlParam`}
        render={(props) => (
          <CollectionPageWithSpinner loading={loading} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
