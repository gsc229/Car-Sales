import React from 'react';
import { connect } from 'react-redux';
//actions: !!! action creators that are not passed into connect do not dispatch actions !!! import connect from react-redux map component state to props!
import { addFeature } from '../actions';

const AdditionalFeature = props => {
  console.log('AdditionalFreaturEE props: ', props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => {
          props.addFeature(props.feature);
        }}
        className='button'
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { addFeature } // same as {type: addFeature}
)(AdditionalFeature);
//!!!! don't forget to add the action creator to the second object.
// action creators that ARE passed into connect's second object get wrapped inside "dispatch"
// e.g. -> connect does this under the hood: store.dispatch(actionCreatorFunction())
