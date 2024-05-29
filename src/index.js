import store from "./store";

store.dispatch({
    type: "bugAdded",
    payload: {
        description: "Bug #1",
        }
});

// store.dispatch({
//     type: "bugRemoved",
//     payload: {
//     id: 1
//     }
// })

console.log(store.getState());
console.log(store);