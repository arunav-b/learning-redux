# Learning Redux

> This project is to practice and learn about different aspects of redux. This is created as and when I was learning about Redux.

Redux is used to maintain a global state of applications in the browser. It can be used with React, Angular or Vue. To get the best out of it, use Redux with Redux Toolkit and Redux DevTools.

## Redux architecture:

1. **Actions** : App can send actions to store by calling the `dispatch()` method, whenever a user generates some event on the browser.
2. **Store** : Store takes the actions and dispatches them to reducers. The `getState()` method of store returns the latest state of the store. The `subscribe()` method is called whenever an event is dispatched.
3. **Reducers**: Reducers take actions and performs the necessary tasks to update the state of the store.

![Redux Architecture](/images/architecture.png)

<br/>

## Steps for designing a Redux application:

<img src="./images/designing-redux-app.png" width="40%">.

<br/>

## Redux Store properties:

The state of the redux store cannot be updated directly from the app. Below are the following methods provided by a redux store -
![Redux store properties](/images/store-properties.png)

<br/>

## Redux App file structure:

Actions and reducers can be defined in separate files and folders. But when using Ducks pattern actions & reducers are defined in the same .js file. In the below file structure we can see there 3 different files are defined and kept under the store folder. Each individual file has its own actions and reducers.

<!-- ![Redux File structure](/images/file-structure.png) -->

<img src="./images/file-structure.png" width="40%">

<br/>

<br/>

## Our demo `bugs` app:

<img src="./images/bug-app.png" width="40%">
