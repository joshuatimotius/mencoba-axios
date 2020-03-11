const redux = require('redux');
const createStore = redux.createStore;

const initialState = { // dibuat untuk deklarasi awal 
    // state global
    value: 0,
    jumlah: 10
}

// Reducer
// membuat task list untuk mengupdate sebuah store
const rootReducer = (state = initialState, Action) => {
    switch (Action.type) {
        case 'ADD_JUMLAH':
            return {
                ...state,
                jumlah: state.jumlah + 2
            }
        case 'CHANGE_VALUE':
            return {
                ...state,
                value: state.value + 12
            }
        default:
            return state;
    }
}

// Store
// membuat tempat untuk state management secara global
const store = createStore(rootReducer); // createStore disini merupakan function yg membutuhkan sebuah reducer
console.log(store.getState())

// Subscription
// proses pemanggilan store yang kita perlukan
store.subscribe(() => {
    console.log('store change', store.getState());
})

// Dispatching Action
// proses pemanggilan spesifik task list reducer untuk melakukan suatu action
store.dispatch({ type: 'ADD_JUMLAH' })
store.dispatch({ type: 'CHANGE_VALUE', newValue: 10 })
console.log(store.getState())
