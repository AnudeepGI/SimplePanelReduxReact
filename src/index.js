import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import App from './App';
import * as serviceWorker from './serviceWorker';


function appStore() {
    return {
        visibilityFilter: 'SHOW_ALL',
        todos: [
            {
                text: 'Consider using Redux',
                completed: true
            },
            {
                text: 'Keep all state in a single tree',
                completed: false
            }
        ]
    }

}

const newReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            let val = (state.sideNavStatus === 'active') ? '' : 'active';
            return { sideNavStatus: val }
        default:
            return { sideNavStatus: '' }
    }
};


const allReducer = combineReducers({
    appStore,
    newReducer
})


const store = createStore(allReducer)

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
