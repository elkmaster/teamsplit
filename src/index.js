import React from 'react';
import Navigator from './routes';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'

const store = createStore(rootReducer);


export default RNRedux = () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
)
