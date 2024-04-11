## What is JSX ?

Jsx is a xml or javascript xml it's alow to a write a html directly in react code
Jsx make easier to write a code in react
<br>

- JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
- JSX converts HTML tags into react elements.
<!-- 
example 
const myElement = <h1> I am learning a React js </h1>
const root = ReactDom.createRoot(document.getelementById('root'))(
root.render)(myElement);

-->

## Note Point

- JSX will throw an error if the HTML is not properly closed.
- The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.
- that in order to embed a JavaScript expression inside JSX, the JavaScript must be wrapped with curly braces, {}.
