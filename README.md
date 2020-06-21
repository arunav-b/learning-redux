# Learning Redux

> This project is to practice and learn about different aspects of redux. This is created as and when I was learning about Redux.

Redux is used to maintain a global state of applications in the browser. It can be used with React, Angular or Vue. To get the best out of it, use Redux with Redux Toolkit and Redux DevTools.

## Redux architecture:

1. **Actions** : App can send actions to store by calling the `dispatch()` method, whenever a user generates some event on the browser.
2. **Store** : Store takes the actions and dispatches them to reducers. The `getState()` method of store returns the latest state of the store. The `subscribe()` method is called whenever an event is dispatched.
3. **Reducers**: Reducers take actions and performs the necessary tasks to update the state of the store.

   <img src="./images/architecture.png" width="60%">.

<br/>

## Steps for designing a Redux application:

<img src="./images/designing-redux-app.png" width="25%">.

<br/>

## Redux Store properties:

The state of the redux store cannot be updated directly from the app. Below are the following methods provided by a redux store

<img src="./images/store-properties.png" width="70%">.

<br/>

## Redux App file structure:

Actions and reducers can be defined in separate files and folders. But when using Ducks pattern, actions & reducers are defined in the same .js file. In the below file structure we can see there 3 different files are defined and kept under the store folder. Each individual file has its own actions and reducers.

  <img src="./images/file-structure.png" width="15%">

Redux toolkit provides two methods - `createAction()` and `createReducer()` methods to create actions and reducers separately in different functions. Alternatively, redux-toolkit also provides `createSlice()` method which combines actions and reducers in a single function. `createSlice()` method is a better option to use, as action-types are defined in one place and the mapping of action and reducer also happens there. It provides better code readability and maintainability. This method takes in 3 params -

- **name** of the slice
- **initialState** of the slice
- **actions-reducers-map** : list of reducers in a key-value map of action(event) -> reducer(event-handler)

<br/>

## Our demo `bugs` app:

  <img src="./images/bug-app.png" width="20%">
  
<br/>

## Additional things to know to design a Redux App

- **Global vs All (Local + Global) State**

  To get the maximum benefit out of redux store all state information into redux except for form data. Below images shows the pros and cons and also the exception.

  <img src="./images/local-vs-global.png" width="50%">
  <img src="./images/exception.png" width="25%">

- **Structuring a Redux Store**

  All individual application domain entities can be grouped under a single entities reducer. Similarly other aspects of the application like different ui related reducers, auth reducers, etc can be grouped along with the entities reducer in a single reducer which will be passed to the store.

  <img src="./images/entities-store-structure.png" width="28%">
  <img src="./images/root-store-structure.png" width="50%">

- **Combining Reducers**

  The store has access to the root reducer. Based on the type of the action, the same will be routed to the appropriate reducer.

  <img src="./images/combining-reducers.png" width="45%">

- **Selectors**

  Selector is a function, ideally defined in the same .js file where slices exist. It takes the current state from the store and returns a computed state out of it. It does not modify the state.

- **Memoization**

  Memoization is a technique to fetch the state from cache if the same has not changed. There is a library called `reselect` that maintains a cache and we can write memoized selector using its `createSelector()` method. This is to improve the performance of our selector functions.

<br/>
  
<br/>

## References:

- [Redux Course](https://codewithmosh.com/p/ultimate-redux)
- [Redux Tutorial](https://redux.js.org/basics/basic-tutorial)
- [Redux Toolkit](https://redux-toolkit.js.org/tutorials/basic-tutorial)
- [React-Redux Guide](https://www.taniarascia.com/redux-react-guide)
