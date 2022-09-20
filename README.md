# Quote Machine
## Introduction
This is a learning project which I built to improve my skills with the JavaScript frontend library React. \
The readme will detail the major functionalities of the project, whose purpose is to fetch and display random quotes in a content box. The quotes are paired with a source, declared as "author" in the code, and may be tweeted on a button press, if the user is logged in to Twitter. 

The project idea and applied data are from www.freeCodeCamp.org and belong to the Front End Development Libraries Certification curriculum.

## The State
The state object stores the component's local data. It is always an object, which may then hold infinitely many keys, which in turn may store data of any type.

## Rendering Elements in React
Many React components can be updated from the state or user interaction. Doing so causes the element to re-render, usually with new information. \
In this case, the App component first renders when the page is loaded, using the placeholder values for "Quote" and "Author" pre-written in the component's state.

## Fetch API
When the component mounts, it uses the Fetch API to access a JSON file at the URL fed to the quote getter - which acts as the quote setter's callback function.
The response object is then parsed and reconverted to JSON before it is loaded to a quote data object. From the quote data object, a random quote is selected and the  "quote" and "author" keys are set to the respective values - React then automatically re-renders the App component to display the state info as the output.

## Asynchronous Code
Most JavaScript is single-threaded, synchronous code. This means that only one function may execute at a time, which may have serious consequences: Time-consuming processes may cause the browser or computer to lock up while calculations run, increasing response times and possibly even give the impression of a crash. \
Asynchrous JavaScript allows us to let a function return a temporary output (a promise), continue the program's other calculations, and handle the actual output when it arrives. \
In this case, the Fetch API and async/await keywords specify asynchronous functions, requesting data from the Net. \
While the response may come within the blink of an eye, this is a slow process by computing standards, so an asynchronous approach is usually best.


## A Note on Using Class-Based React
React introduced webhooks in version 16.8.0, which this project does not employ. Using the older class-based approach to components involved writing some boiler plater code which is handled under the hood in newer versions. \
I believe having at least some experience with the class-based approach to React is primarily useful for two purposes: 
1. Increased understanding of what goes on under the hood. Webhooks make development much faster and easier (in my opinion), but in doing so allow developers to skip several steps of the understanding process.
2. Understanding class-based component for their own sake.

It is important to remember that old knowledge does not necessarily become obsolete when a new version is released. The webhook introduction was not a breaking change, and rewriting a large code base to exclusively employ hooks may not be worth the time invested. Thus, knowledge of class-based components is likely to be useful when working with pre-2018 React apps.

## Conclusion
The project has taught me about some key principles in web development, as well as some peripheral elements, which are still nice to know.
I have developed or improved skills in the following areas:
* Handling, updating and utilizing local state
* Utilizing rendering and re-rendering to represent the current state
* Utilizing asynchronous code and promise-based behaviour
* Knowledge of class-based React components

I started the project in order to improve my skills with React. By that measure, the project can easily be considered a success. 