// Pure Function

// Pure functions always give the same output for the same input, making them deterministic. Their dependency is only on input arguments, assuring no mutable state or data change. Having no side effects enables them to be free of context, meaning they don't rely on external elements.

// NOT PURE

function isEligible(age){
    age > minAge
}
// this function above is mutable because  of the global variable "minAge"

// strings are immutable, but objects and arrays are not
// declearing an object using "const" dosenn't make it immutable,
// const only prevent reassignment

// Why immutability
// 1. Predictability
// 2. Faster Change Detection
// 3. Concurrency
// 4. Undo History
// 5. Tracking Changes
// 6. Deterministic Functions
// 7. Referential Transparency
// 8. Testability
// 9. Memoization
// 10. Pure Functions
// 11. Persistent Data Structures
// 12. Unidirectional Data Flow
// 13. Functional Programming
// 14. Immutability
// 15. Side Effects
// 16. State Management
// 17. Data Integrity
// 18. Data Consistency

// Cons of immutability
// 1. Performance
// 2. Memory Usage
// 3. Complexity
// 4. Learning Curve
// 5. Compatibility
// 6. Mutability
// 7. Flexibility


//  DONOT MUTATE DATA WHILE USING REDUX

const person = { name:  "Muhammad"};

// Object assign method
const updated = Object.assign({}, person, {name: "umar", age: 33});
console.log(updated);

// update object using spread operator
const school = { name:  "Glad Tidings"};
const schoolUpdated = {...school, name: "MIA", number: 33};

console.log(schoolUpdated);


// ISSUES TO TAKE NOTE When performing a shallow copy
const student ={
    name: "Hassan", age: 30,
    address: {
        country: "Nigeria",
        city: "Kano"
    }
};

// this will change without affecting the object "student"
const updateStudent = {...student, name: "Aminu"};
// console.log(student); 
//Result {
//     name: 'Hassan',
//     age: 30,
//     address: { country: 'Nigeria', city: 'Kano' }
//   }


// WRONG UPDATE 
     //updateStudent.address.city = "Abuja"
// Change this way will affect the "student"
// console.log(student); 
// RESULT
// {
//     name: 'Hassan',
//     age: 30,
//     address: { country: 'Nigeria', city: 'Abuja' }
//   }


// To SOLVE THE PROBLEM USING DEEP COPY
const correctUpdate = {
    ...student, 
    address: {
     country: "Nigeria",
     city:  "Kaduna"
    },
    name: "Rabiu"

};
console.log(student);