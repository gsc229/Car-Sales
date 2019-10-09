import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { featureReducer } from './reducers';

import 'bulma/css/bulma.css';
import './styles.scss';
// for proj. need to create a reducer
const store = createStore(featureReducer);
console.log('index.js store.getState()', store.getState());
console.log('index.js store', store);

/* 
  GETTING THINGS CONNECTED:
0. Add dependencies: yarn add redux react-redux
1. Reducer 
2. (for index.js(src))
  2.0 import {Provider} from 'react-redux' >> wrap the <App/> inside a redux provider component
  2.1 import {featureReducer} from './reducers' ....(or whatever you named your reducer)
  2.2 Create the Redux 'store' (createStore) >> import {createStore} from 'redux';
  2.3 Create a store with a reducer >> const store = createStore(reducer);
  2.4 Pass the newly created store to store prop on the provider:  

          const rootElement = document.getElementById('root');
          ReactDOM.render(
            <Provider store={store}>
              <App />
            </Provider>,

            rootElement
          );

4. (Repeat this step for appropriate components and thier needed props) In the appropriate component      import {Connect} from 'react-redux' and then, at the bottome of the component, map the                appropriate state you need to the props of that compoent (See <Header />):

          const mapStateToProps = state => {
            return {
              additionalPrice: state.additionalPrice,
              car: state.car,
              additionalFeatures: state.AdditionalFeatures
            };
          };

          export default connect(
            mapStateToProps,
            {}
          )(Header);


*/

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  rootElement
);
