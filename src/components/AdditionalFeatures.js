import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';

const AdditionalFeatures = props => {
  console.log('AdditionalFeatures props: ', props);
  return (
    <div className='content'>
      <h4>Choose Additional Features:</h4>
      <p>!need to send an item to Added features:</p>
      {props.store.length ? (
        <ol type='1'>
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    store: state.additionalFeatures
  };
};

export default connect(
  mapStateToProps,
  {}
)(AdditionalFeatures);
