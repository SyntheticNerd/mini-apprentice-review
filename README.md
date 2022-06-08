# React Mini Apprenticeship

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is a small exercise covering the basics of react including:

### Screenshot

![Inactive Design](./design/inactive-design.png)

### Links

- [Github Repo](https://github.com/SyntheticDesigner/mini-apprentice-review)
- [Live Site URL](https://syntheticdesigner.github.io/mini-apprentice-review/)

## Process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Grid
- [React](https://reactjs.org/) - JS library

### Learning Objectives

- Page Composition - How can elements on a website be broken into smaller parts to create more manageable sections of code using react functional (or class) components.
- How can we pass information from one component to another in order to display dynamic content.
  Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

#### Building Components

There are two ways commonly used to build react components. (There are more then two but we are really only going to focus on 1)

There are class components and functional components. Class components are slowly being phased out in favor of the simpler and shorter functional component implementation. It would be good to review class components because although they are phased out they can still be found in the wild.

The way we will be using in this project is the function component method.

How to make a functional component:

The first step is to make a `components` folder inside your `src` folder. Then inside the components folder we will make a new file, this file can be named anything you like the only exceptions being that it must start with a capital letter and it uses a camel case syntax. (CamelCaseSyntax)

Once you have made an appropriately named file you can open that file and start making your component.

```jsx
export const function MyComponent() => {
    return (
        <div>
            <p>Hello World</p>
        </div>
    )
}
```

There are many tools on vs code to help you program faster. If you have an extension such as [JSX Code Snippets](https://marketplace.visualstudio.com/items?itemName=skyran.js-jsx-snippets) you can simply type `rfc`
in the file and hit tab. This will automatically create a react function component and give it the same name as the file.

Naming your default export component the same as your file is a common practice in React. One we will use in this exercise.

Once you have your component created you can import it in its intended parent.

```jsx
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div className='App'>
      <MyComponent />
    </div>
  );
}

export default App;
```

#### Working with props

Passing props between components is one of the most common task in react. It is at the core of how react function. Props are how we are able to generate dynamic content. Make content appear or disappear from the screen and share variables between components and even functions.

Passing props down to a component is really easy. Its just like setting an html attribute.

In the React component tag that is rendering our content to the page we will create what looks like a custom html attribute and give it some information to pass down to the component.

Things to be aware of: by default an html element expects a string to be assigned to an html attribute. This behavior is carried over into JSX; however, we usually want to pass a lot more than a string. Luckily react gives us the ability to pass more complex variables using curly braces `{}`.

```jsx
import MyComponent from "./components/MyComponent";

let header = "Random Lorem";

let paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing
    elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.`;

function App() {
  return (
    <div className='App'>
      {/*Look Here*/}
      <MyComponent
        thisIsTheParagraphText={paragraph}
        thisIsTheHeaderText={header}
      />
    </div>
  );
}

export default App;
```

Now that we are passing props down to our component we need to expose those in the component itself. All the custom attributes we defined a.k.a props are stored in a props variable that the react component has access to.

In the react component we will access the props variable which is an object that contains all our props in key value pairs.

```jsx
export const function MyComponent(props) => {
    return (
        <div>
            <h1>{props.thisIsTheHeaderText}</h1>
            <p>{props.thisIsTheParagraphText}</p>
        </div>
    )
}
```

The key things to notice in the above snippet is that props is pulled in as a parameter of MyComponent, then we access the key value pairs of the props object via the dot notation `props.myProp` inside our jsx return.

Now remember how jsx acts like html. So in order to use a variable inside of the html. Just like we did before we wrap the variable in curly braces `{props.myProp}` in order to display the actual content of the variable.

#### Stretch Goals

Now that we have the ability to pass props to components we have almost everything we need to display a dynamic list of content. We can do this using map.

When you map through an array it return a new array. So what if you map through an array and for each element in the array we don't just return a modified value but we return an entire React Component. React has the ability to display an array of components to the screen with little fus.

Lets set it up, first we will need an array of data to map through

```jsx
const data = ["First", "Second", "Third"];
```

```jsx
function App() {
  return (
    <div className='App'>
      <MyComponent />
    </div>
  );
}

export default App;
```

### Useful resources

- [React Docs](https://reactjs.org/docs/components-and-props.html) - This section specifically covers components and props and how they work together.
- [Best Practices Article](https://www.sitepoint.com/creating-reusable-react-components/) - This Article describes several patterns you might encounter in your code that suggest using a react component is a good option.
- [Forum with good Advice](https://dev.to/jssantana/reactjs-component-everything-or-not-4bkp) - This person proposed a really good question; one that is often up for debate. The answer provided by _Andrew Baisden_ Is a great summary of what standard page elements could be broken into components.

## Author

- [Portfolio](https://syntheticdesigner.github.io/)
- [LinkedIn](https://www.linkedin.com/in/andrew-schroepfer/)
