import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions';

const AddedFeature = props => {
  console.log('AddEDFeaturE.js props', props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => {
          props.removeFeature(props.feature);
        }}
        className='button'
      >
        X
      </button>
      {props.feature.name} ${props.feature.price} ( id: {props.feature.id})
    </li>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {
    removeFeature
  }
)(AddedFeature);
