# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

 Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Reducers are just pure functions that take the previous state and an action, and return the next state.  reducer determines changes to an application's state. It uses the action it receives to determine this change. .

Actions only tell what to do.IT is an object that contains the payload of information.They are the only source of information for the Redux store to be updated.

 A store is a state container which holds the application's state.A store is an immutable object tree in Redux.and redux can have only a single store in your application

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

Redux Thunk allows you to write action creators that return a function instead of an action. it changes our action creators using middleware.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

my favorite state management sytem  would be context API, because of it simplicity.
the Context API makes passing data through deeply nested components simple.