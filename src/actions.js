import * as actions from "./actionTypes"

// export function bugAdded () {
//     return {
//         type: actions.BUG_ADDED,
//         payload: {
//             description: "Bug1"
//         }
//     };

// }

// export function bugRemoved () {
//     return {
//         type: actions.BUG_REMOVED,
//         payload: {
//             id: 1
//         }
//     };
// }

export const bugAdded = description => ({
  
        type: actions.BUG_ADDED,
        payload: {
            description
        }
    });

    export const bugResolved = id => ({
  
        type: actions.BUG_RESOLVED,
        payload: {
            id
        }
    });    


export const bugRemoved = () => {
    return {
        type: actions.BUG_REMOVED,
        payload: {
            id: 1
        }
    };
}