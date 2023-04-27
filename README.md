What is react.js ?

React.js (or React) is an open-source JavaScript library used for building user interfaces for web applications. It was developed by Facebook and released in 2013.

React allows developers to create reusable UI components and manage the state of a web application, making it easier to build complex and interactive web applications. React uses a declarative approach to building user interfaces, which means that developers describe how the UI should look and behave, and React takes care of updating the UI in response to changes in data or user interactions.

React is widely used in the development of single-page applications and can work seamlessly with other libraries and frameworks. It has a large and active community, with many resources available for learning and support. React has become one of the most popular libraries for building web applications, and it is used by many companies including Facebook, Airbnb, and Netflix.

React.js হচ্ছে JavaScript এর একটি Open Source Library। যেটা মূলত ব্যবহার করা হয় User Interface এবং স্পেশালি Single-Page Application বানানোর জন্য। ওয়েব এবং মোবাইলের View Layer Handling করাই React এর উদ্দেশ্য । React আমাদের UI Component গুলোকে Reusable করার সুবিধা দিয়ে থাকে। এটি দ্রুত এবং প্রভাবশালী এবং প্রয়োজনীয় কম কোড ব্যবহার করে।  React ব্যবহার করার মেইন পারপাস হচ্ছে, এটি অনেক Simple, Fast এবং Scalable.


What are the React components ?


React Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components.

React components have properties (props) and state. Props are immutable and are used to pass data from a parent component to a child component. State is mutable and is used to manage the data and behavior of a component within the component itself. React Components are regular Javascript functions except;
Their names begin with a capital letter. They return JSX  markup.


Building blocks of the user interface
Each component exists in the same space but works independently
All of the components are being merged in a parent component (the final UI)
Split s UI into independent and reusable pieces
Accepts input called  called props(optional) and returns react element
Reusable having their own structure  and methods

3. How many types of components react ?

There are 4 types of components .
1. Similar in look, different in data
2. Container component.
3.  No pattern , but breakdown for working purpose
4. Stand-alone component


4. What are the advantages of the components?

Code reusability
Fast development
Design consistency
Maintainability (update just one component & get result in all spaces related to this component)


5. What is a Single Page Application (SPA)?

 only one web page, and each time something happens, only part of the pages is reloaded while the rest of the HTML remains unchanged. All user interaction with this service is carried out, using one screen page. Load all the necessary HTML, CSS and javascript in the initial page load , and then dynamically update their DOM and retrieve extra data based on user interactions. Give the users the illusion that they are accessing different pages of paths.  Enables the complex functionality of an MPA with a convenient navigation ( a hybrid approach).


6. What are the advantages of the Single Page Application?

 Single Page Applications (SPAs) provide several performance benefits compared to traditional multi-page applications:

Faster Page Loads: SPAs only need to load once, so subsequent navigation within the app is much faster because only the necessary data needs to be fetched from the server, rather than reloading the entire page.

Reduced Server Load: Since the server only needs to send data and not the entire HTML, CSS and JavaScript files with each request, server load is reduced, resulting in faster response times and reduced server costs.

Better User Experience: With SPAs, users experience smoother and faster transitions between pages since the app doesn't need to reload the entire page for each request. This results in a more fluid and responsive user experience.

Caching: SPAs can make use of browser caching techniques, which allows the app to store frequently used data in the browser's cache, reducing the need for server requests and improving performance.

Improved SEO: SPAs can be optimized for search engine indexing by making use of server-side rendering and other techniques, making it easier for search engines to crawl and index the content of the application.

সিঙ্গেল পেজ অ্যাপ্লিকেশন (SPA) ব্যবহার করলে মাল্টি-পেজ অ্যাপ্লিকেশনের সাথে তুলনামূলকভাবে কিছু উপকার হয়ে থাকে। সেগুলো হল:

১. দ্রুত পেজ লোড: SPA শুধুমাত্র একবার লোড করতে হয়, তাই এর ভিতরে যাওয়ার পর নেভিগেশন বেশি দ্রুত হয় কারণ সার্ভার থেকে কেবল প্রয়োজনীয় ডেটা আনতে হয়, পুরো পেজ লোড করতে নয়।

২. সার্ভার লোড কম: SPA এর কারণে সার্ভার শুধুমাত্র ডেটা পাঠানো হয় এবং পুরো HTML, CSS এবং JavaScript ফাইলগুলি সার্ভার প্রতিটি অনুরোধের সাথে পাঠানোর দরকার নেই। এর ফলে সার্ভার রেসপন্স সময় কমে যায় এবং সার্ভারের খরচ হয়ে থাকে কম।

7.Whats is JSX?
JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most code bases use it.
JSX stands for  Javascript XML .
allows us to write HTML in react.
Writing and adding HTML in react is easier.

JSX হল JavaScript XML। এটি একটি জাভাস্ক্রিপ্ট এক্সটেনশন যা একটি কম্পিউটার একটি ডকুমেন্ট লেআউট এবং লজিক একত্রিত করে।
JSX হল সিনটেক্স সিমিলার কনভেনশন যা রিটার্ন করতে ব্যবহৃত হয় এবং এটি একটি ফাংশন হিসাবে স্কোপ প্রদর্শন করে। এটি পুরোপুরি একই জাভাস্ক্রিপ্ট সিনট্যাক্স থেকে স্থানান্তর করা হয় কিন্তু এটি রিটার্ন করে যখন সংক্ষিপ্ত লেখা না যায়।


8. Rules you should know for JSX!
 Return a single root element 
To return multiple elements from a component, wrap them with a single parent tag.
For example: 
you can use a <div> 
If you don’t want to add an extra <div> to your markup, you can write <> and </> instead. This empty tag is called a Fragment. Fragments let you group things without leaving any trace in the browser HTML tree.
 Close all the tags 
JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />, and wrapping tags like <li>oranges must be written as <li>oranges</li>.

camelCase all most of the things! 

JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like class.

This is why, in React, many HTML and SVG attributes are written in camelCase. For example, instead of stroke-width you use strokeWidth. Since class is a reserved word, in React you write className instead, named after the corresponding DOM property


9.  Writing Markup with JSX : 

JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most code bases use it.

 10. JSX: Putting markup into JavaScript : 

The Web has been built on HTML, CSS, and JavaScript. For many years, web developers kept content in HTML, design in CSS, and logic in JavaScript—often in separate files! Content was marked up inside HTML while the page’s logic lived separately in JavaScript: But as the Web became more interactive, logic increasingly determined content. JavaScript was in charge of the HTML! This is why in React, rendering logic and markup live together in the same place—components.

11. Why can't browsers read JSX ?
.browser can only read javascript objects
JSX is not a regular javascript objects
To enable a browser to read JSX  we need to transform JSX  file into a javascript object using JSX transpiler like Babel and then pass it to the browser

###Note 
JSX and React are two separate things. They’re often used together, but you can use them independently of each other. JSX is a syntax extension, while React is a JavaScript library.

LEARN MORE ABOUT JSX : https://react.dev/learn/writing-markup-with-jsx



12. What is useState in react.js?

In React.js, useState is a hook that allows you to add state to a functional component. If I need to change anything useState will work . State is an object that holds data that may change over time, and by using the useState hook, you can manage state within a functional component. 
useState returns an array with exactly two values:
The current state. during the first render, it will match the initialState you have passed
The set function that lets you update the state to a different value and trigger a render
Initial value of useState👍 : 
 if we do any addition we will set initial value  0.
 if we do any multiplication we will set initial value 1.
 if we show any array of objects we will set an empty array as an initial value 
If we want do anything with object we will set initial value an empty object
If we set any toggle we sill set initial value boolean

Usage of useState👍 :
Adding state to a component
Updating state based on the previous state
Updating objects and arrays in state
Avoiding recreating the initial state
Resetting state with a key
Storing information from previous renders


13. Example of using  useState !

import React, { useState } from "react";
function Example() {
  // Declare a new state variable called "count" with initial value of 0
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
  <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

In this example, useState is used to declare a new state variable called "count" and initialize it to 0. The setCount function is used to update the value of "count". When the button is clicked, the setCount function is called with the new value of "count", which triggers a re-render of the component with the updated value.

Using useState makes it easy to manage state within a functional component, and allows you to update the state and re-render the component based on user interactions or other events.

14 . What is UseEffect react js ? 

`useEffect` is a hook in React.js that allows you to perform side effects in function components. Side effects are any operations that affect something outside of the scope of the current function, such as fetching data from an API, manipulating the DOM, or setting up event listeners.

`useEffect` takes two arguments: a callback function that represents the side effect you want to perform, and an optional array of dependencies that specify when the effect should be run. The callback function is called after the component has been rendered, and it can return a cleanup function that will be called before the component is unmounted.

The array of dependencies is used to determine when the effect should be run. If the array is empty, the effect will only run once when the component is mounted. If the array contains any values, the effect will run when any of those values change.

15. Example of using  useEffect!

import { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <ul>
      {data.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
}
In this example, the `useEffect` hook is used to fetch data from an API when the component is mounted. The empty array `[]` passed as the second argument to `useEffect` ensures that the effect is only run once. The fetched data is stored in state using the `useState` hook, and the component renders a list of items based on that data.


16. What are props in react.js ? 
Passing Props to a Component : We use props to pass data from one component to another (from a parent component to a child component) React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

To pass props, add them to the JSX, just like you would with HTML attributes.

To read props, use the function Avatar({ person, size }) destructuring syntax.

You can specify a default value like size = 100, which is used for missing and undefined props.

You can forward all props with <Avatar {...props} /> JSX spread syntax, but don’t overuse it!

Nested JSX like <Card><Avatar /></Card> will appear as Card component’s children prop.

Props are read-only snapshots in time: every render receives a new version of props.

You can’t change props. When you need interactivity, you’ll need to set state.

viii. props are unidirectional. That's mean data of props will go up to down
### LEARN MORE ABOUT PROPS: https://react.dev/learn/passing-props-to-a-component


17. what is npm?

npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.



18. What is the difference between props and state?

PROPS:
The Data is passed from one component to another.
It is Immutable (cannot be modified).
Props can be used with state and functional components.
Props are read-only.
STATE:
The Data is passed within the component only.
It is Mutable ( can be modified).
State can be used only with the state components/class component (Before 16.0).
State is both read and write.	
	

Points Discussed:
Props are used to pass data from one component to another.
The state is a local data storage that is local to the component only and cannot be passed to other components.
The this.setState property is used to update the state values in the component.

19. What is the Hooks?

Hooks were added React in version 16.8 . Hooks allows function components to have access to state and other React features .Hooks allows us to 'hook into React features such ad state and lifecycle methods

 UseState Hook 

The useState Hook allows us to track state in a function component.

To use the useState Hook You need to know a few things:

 you must import it from the React library.
 You must invoke it inside a React component

 useEffect hook
The useEFfect Hook allows you to perform side effects in your components . Some examples of side effects are: fetching data, updating the DOM, and timers

To use useEffect hook, we need to a few things:

 we import useEffect from React
 We call it above the returned JSX in our component
we usually pass two arguments : a anonymous arrow function and a array



20. What is virtual DOM?

Lightweight copy of a DOM object .Has properties the same as real DOM object. Make changes in the DOM with the help of the DIFF algorithm. It's like instead of moving actual rooms in a house , you edit the blueprint . 

21. What is the difference between real DOM and virtual DOM?

Real DOM : 
It is an abstraction of a page's HTML.
It can manipulate on-screen elements.
 Any change updates the entire DOM tree.
Updating is slow and inefficient.

Virtual DOM : 
It is an abstraction of an HTML DOM.
It cannot manipulate on-screen elements.
Any change only updates the relevant node in the tree.
Updating is fast and efficient.

###LEARN MORE ABOUT VIRTUAL DOM VS REAL DOM: https://www.educative.io/answers/what-is-the-difference-between-virtual-and-real-dom-react









