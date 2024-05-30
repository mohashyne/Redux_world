
// this is how we define a private property in javascript
// we can't access this property from outside of this module
// we can only access this property from the functions defined in this module
// this is a closure
// state is a private property
// getState is a public method
// we can access state from getState
function createStore() {
    let state;

    function getState() {
        return state;
    }

    return {
       getState
    };
}


// with this we are making the state public
// we can access state from outside of this module
// export function createStorePublic() {
//     let statePublic;

//     return {
//        statePublic
//     };
// }


export default createStore();