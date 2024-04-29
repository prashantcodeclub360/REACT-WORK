# What is Hook In React ?

- Hooks allow us to "hook" into React features such as state and lifecycle methods.
- hook are the function which we access to state or not use or need a class comonents
- hook replace class components

## Hook Rules

There are 3 rules for hooks:

- Hooks can only be called inside React function components.
- Hooks can only be called at the top level of a component.
- Hooks cannot be conditional

### Note: Hooks will not work in React class components.

# state in React ?

- the state in react is an updatable structure that is used to contain data or information
- The react usestate hook allow us to track state in a function components

### how to import usestate

- To use the state hook , we fisrt need to import into our components  
  <br> import { useState } from "react";
- with this state we used also a setmethod()

###

The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

# What is useEffect hook ?

the use effect are to be used for side components or used for fetch data or updating in dom etc

- let suppose we use a timmer in our project or count dependices then we used a effect hook
- its help to run every render or and have a sevral ways to control when he side effects

### note point

Here is an example of a useEffect Hook that is dependent on a variable. If the count variable updates, the effect will run again:

# React Context

React Context is a way to manage state globally
it can be used together with the usestate hook to share state between deeply nested components with usestate alone
