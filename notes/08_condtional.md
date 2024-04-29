# What is Conditional Rendering in React ?

Conditional rendering in react.js allow to those components which we want to hide or make user interference feature
In React, you can conditionally render components.

There are several ways to do this.

if Statement
We can use the if JavaScript operator to decide which component to render.

Example:Get your own React.js Server
We'll use these two components:

function MissedGoal() {
return <h1>MISSED!</h1>;
}

function MadeGoal() {
return <h1>Goal!</h1>;
}
Example:
Now, we'll create another component that chooses which component to render based on a condition:

function Goal(props) {
const isGoal = props.isGoal;
if (isGoal) {
return <MadeGoal/>;
}
return <MissedGoal/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);

Try changing the isGoal attribute to true:

Example:
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={true} />);
