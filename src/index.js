import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as actiontypes from './redux/actiontypes';

const globalState = {
    data: []
}

// Reducer
const rootReducer = (state = globalState, action) => {
    switch (action.type) {
        case actiontypes.pushItem:
            return {
                data: [...state.data, action.item]
            }
        case actiontypes.initData:
            return {
                data: action.data
            }
        default:
            return state
    }
}

// Store
const store = createStore(rootReducer);

// Actions

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
