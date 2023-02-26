const questions = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is an open-source front-end JavaScript library that is used for building user interfaces, especially for single-page applications. It is used for handling view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.,",
  },
  {
    id: 2,
    question: "What is JSX?",
    answer:
      "JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML). Basically it just provides syntactic sugar for the React.createElement() function, giving us expressiveness of JavaScript along with HTML like template syntax. JSX is stricter than HTML.",
  },
  {
    id: 3,
    question: "What is the difference between Shadow DOM and Virtual DOM?",
    answer:
      "The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The Virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.",
  },
  {
    id: 4,
    question: "Why can't browsers read JSX?",
    answer:
      "Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.",
  },
  {
    id: 5,
    question: "What is state in React",
    answer:
      "State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components.",
  },
  {
    id: 6,
    question: "What are props in React?",
    answer:
      "Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes. They are data passed down from a parent component to a child component. The primary purpose of props in React is to provide following component functionality: Pass custom data to your component, Trigger state changes. Use via this.props.reactProp inside component's render() method.",
  },
  {
    id: 7,
    question: "What is the d/b state and props?",
    answer:
      "Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.",
  },
  {
    id: 8,
    question: "What are inline conditional expressions?",
    answer:
      "You can use either if statements or ternary expressions which are available from JS to conditionally render expressions. Apart from these approaches, you can also embed any expressions in JSX by wrapping them in curly braces and then followed by JS logical operator &&.",
  },
  {
    id: 9,
    question: "What is the use of refs?",
    answer:
      "The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.",
  },
  {
    id: 10,
    question: "What is Virtual DOM?",
    answer:
      'The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It\'s a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.',
  },
];

export default questions;
