import React from "react";

const Blogs = () => {
  return (
    <div className="text-left p-7">
      <h1 className="text-3xl font-semibold">How will you improve the performance of a React Application?</h1>
      <p className=" text-xl py-5">Some Performance Optimization Techniques for React Apps</p>
      <ul>
        <li>Using Immutable Data Structures</li>
        <li>Function/Stateless Components and React.PureComponent</li>
        <li>Dependency optimization</li>
        <li>Avoid Inline Function Definition in the Render Function.</li>
        <li>Avoid using Index as Key for map</li>
        <li>Avoiding Props in Initial States</li>
        <li>Spreading props on DOM elements</li>
        <li>Avoid Async Initialization in componentWillMount()</li>
        <li>CSS Animations Instead of JS Animations</li>
        <li>Using a CDN</li>
      </ul>
      <h1 className="text-3xl font-semibold">
        What are the different ways to manage a state in a React application?
      </h1>
      <p className=" text-xl py-5">
        There are four main types of state you need to properly manage in your
        React apps:
      </p>
      <ul>
        <li>Local state</li>
        <li>Global state</li>
        <li>Server state</li>
        <li>URL state</li>
      </ul>
      <h1 className="text-3xl font-semibold">How does prototypical inheritance work?</h1>
      <p className=" text-xl py-5">
        Inheritance allows an object to use the properties and methods of
        another object without duplicating the code.
      </p>
      <p className=" text-xl py-5">JavaScript uses the prototypal inheritance.</p>
      <h1 className="text-3xl font-semibold">
        Why you do not set the state directly in React. For example, if you have
        const [products, setProducts] = useState([]). Why you do not set
        products = [...] instead, you use the setProduct
      </h1>
      <p className=" text-xl py-5">
        React, keeps a track record of all its virtual DOM. Whenever a change
        happens, all the components are rendered and this new virtual DOM is
        then compared with the old virtual DOM. Only the differences found are
        then reflected in the original DOM. So if we don't use useState then we
        will not notice any performance lacking in small app or website but it
        will put impact on big website or app.
      </p>
      <h1 className="text-3xl font-semibold">
        You have an array of products. Each product has a name, price,
        description, etc. How will you implement a search to find products by
        name?
      </h1>
      <p className=" text-xl py-5">Just implement a search query in backend by name . </p>
      <h1 className="text-3xl font-semibold">What is a unit test? Why should write unit tests?</h1>
      <p className=" text-xl py-5">
        Unit testing involves testing individual components of the software
        program or application. The main purpose behind this is to check that
        all the individual parts are working as intended. A unit is known as the
        smallest possible component of software that can be tested. Generally,
        it has a few inputs and a single output.
      </p>
      <p className=" text-xl py-5">Advantages of Unit Testing</p>
      <ul>
        <li>The process becomes agile</li>
        <li>Quality of Code</li>
        <li>Find Software Bugs Easily</li>
        <li>Facilitates Change</li>
        <li>Provides Documentation</li>
        <li>Debugging Process</li>
        <li>Reduce Costs</li>
      </ul>
    </div>
  );
};

export default Blogs;
