import store from "./store";
import * as actions from "./actionTypes"

// state  = reducer(state, action)
// notify the subscriber

const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
})

store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description: "Bug #1",
        }
});

unsubscribe();

store.dispatch({
    type: actions.BUG_REMOVED,
    payload: {
    id: 1
    }
})

// console.log(store.getState());
// console.log(store);