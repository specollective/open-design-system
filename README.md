# SPEC Open Design System

🚧 This code is actively under development and should be considered unstable.

This repository contains the code for SPEC's Open Design System (ODS). The goal of ODS is to coherently organize design patterns and best practices to support development of user interfaces that are accessible, inclusive, and ergonomic. ODS should provide pattern libraries, design languages, style guides, coded components, brand languages, and supporting documentation. Our hope is that ODS will serve as a reference and source of truth that helps SPEC and other organizations design and build digital products.

Currently, ODS is being used in React-based projects at SPEC as an npm package. There are plans in the future to include setup instructions for Vue, Angular, and other JavaScript frameworks. If you are interested in using ODS in your project feel free to create an issue, open a pull request or reach out to us at info@specollective.org.

# Quick Start for Create React App

1. Install the npm package
```
npm install spec-ods
```

2. Add the set up code to the `index.js` file

```JavaScript
import { applyPolyfills, defineCustomElements } from 'spec-ods/loader'
import 'spec-ods'

applyPolyfills().then(() => {
  defineCustomElements(window)
})
```

3. Use custom element in your code

```
function ExampleButton () {
  return (
    <plain-button>Click me!</plain-button>
  )
}
```
# Detailed instructions

> ## About
>> - Module published at `spec-ods`  
>> <details>
>>  <summary>Use instructions</summary>
>>
>>> 1. Run `npm install spec-ods --save` from the root of your project directory  
>>> <details>
>>>  <summary>2. Framework use</summary>
>>>
>>>> <details>
>>>>  <summary><b>React</b></summary>
>>>>
>>>>> <details>
>>>>>  <summary>1. Import Middleware into <code>index.js</code></summary>
>>>>>
>>>>>> ``` 
>>>>>> import React from 'react';
>>>>>> import ReactDOM from 'react-dom';
>>>>>> import './index.css';
>>>>>> import App from './App';
>>>>>> import reportWebVitals from './reportWebVitals';
>>>>>> 
>>>>>> import { applyPolyfills, defineCustomElements } from 'spec-ods/loader'
>>>>>> 
>>>>>> // ... //
>>>>>> 
>>>>>> reportWebVitals();
>>>>>> 
>>>>>> applyPolyfills().then(() => {
>>>>>>   defineCustomElements(window)
>>>>>> })
>>>>>> ``` 
>>>>> </details>
>>>>> <details>
>>>>>  <summary>2. Import the component into your React component</summary>
>>>>>
>>>>>> ``` 
>>>>>> import React from 'react';
>>>>>> import './App.css';
>>>>>> import 'spec-ods';
>>>>>> 
>>>>>> 
>>>>>> function App() {
>>>>>> 
>>>>>>   const array = [
>>>>>>     {
>>>>>>       label: 'Accordion 1',
>>>>>>       description: 'Lorem ipsum',
>>>>>>       color: '#439ECA',
>>>>>>       width: '300px'
>>>>>>     },
>>>>>>     {
>>>>>>       label: 'Accordion 2',
>>>>>>       description: 'Lorem ipsum',
>>>>>>       color: '#7EC74A',
>>>>>>       width: '300px'
>>>>>>     },
>>>>>>     {
>>>>>>       label: 'Accordion 3',
>>>>>>       description: 'Lorem ipsum',
>>>>>>       color: '#F8CD41',
>>>>>>       width: '300px'
>>>>>>     }
>>>>>>   ]
>>>>>>   return (
>>>>>>     <div className="App">
>>>>>>       {
>>>>>>         array.map((array) => {
>>>>>>           return (
>>>>>>             <accordion-button 
>>>>>>             label={array.label}
>>>>>>             description={array.description}
>>>>>>             color={array.color}
>>>>>>             width={array.width}>
>>>>>>             </accordion-button>
>>>>>>           )})
>>>>>>       }
>>>>>>     </div>
>>>>>>   );
>>>>>> }
>>>>>> 
>>>>>> export default App;
>>>>>> ``` 
> ## Steps
>> <details>
>>  <summary>Steps taken to create the component(s)</summary>
>>
>>> <details>
>>>  <summary>1. Create a project directory</summary>
>>>
>>>> 1.1- `mkdir spec-ods`  
>>>> 1.2- `cd spec-ods`
>>> </details>
>>> <details>
>>>  <summary>2. Initialize the stencil</summary>
>>>
>>>> 2.1- Run `npm init stencil`  
>>>> 2.2- Choose the `component` option  
>>>> 2.3- Name your project  
>>>> 2.4- Run `npm install`
>>> </details>
>>> <details>
>>>  <summary>3. Create a component.</summary>
>>>
>>>> <details>
>>>>  <summary>3.1- Create <code>component</code> directory</summary>
>>>>
>>>>> ``` 
>>>>> mkdir src/components/my-button
>>>>> ``` 
>>>> </details>
>>>> <details>
>>>>  <summary>3.2- Create and fill out file <code>component.tsx</code></summary>
>>>>
>>>>> <details>
>>>>>  <summary>3.2.1- Create <code>component.tsx</code></summary>
>>>>>
>>>>>> ``` 
>>>>>> touch src/components/my-button/my-button.tsx
>>>>>> ``` 
>>>>> </details>  
>>>>> <details>
>>>>>  <summary>3.2.2- <code>my-button.tsx</code></summary>
>>>>>
>>>>>> ``` 
>>>>>> import { Component, State, EventEmitter, Event, Prop, h } from '@stencil/core';
>>>>>> 
>>>>>> @Component({
>>>>>>   tag: 'my-accordion',
>>>>>>   styleUrl: 'my-accordion.scss',
>>>>>>   shadow: true
>>>>>> })
>>>>>> 
>>>>>> export class MyComponent {
>>>>>> 
>>>>>>   @State() toggle: boolean = false;
>>>>>> 
>>>>>>   @Event() onToggle: EventEmitter;
>>>>>> 
>>>>>>   @Prop() label: string;
>>>>>> 
>>>>>>   @Prop() description: string;
>>>>>> 
>>>>>>   @Prop() width: string;
>>>>>> 
>>>>>>   @Prop() color: string;
>>>>>> 
>>>>>>   toggleComponent() {
>>>>>>     this.toggle = !this.toggle;
>>>>>>     this.onToggle.emit({ visible: this.toggle });
>>>>>>   }
>>>>>> 
>>>>>>   render() {
>>>>>> 
>>>>>>     return (
>>>>>>       <div>
>>>>>>       <button class="accordion"
>>>>>>       style={{
>>>>>>         width: this.width,
>>>>>>         backgroundColor: this.color,
>>>>>>       }}
>>>>>>       onClick={() => this.toggleComponent()}>
>>>>>>       {this.label}
>>>>>>       {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}
>>>>>>       </button>
>>>>>>       <div class={`content-box ${this.toggle ? 'open' : 'close'}`}
>>>>>>       style={{width: this.width}}>
>>>>>>       <p>{this.description}</p>
>>>>>>       </div>
>>>>>>       </div>
>>>>>>     )
>>>>>>   }
>>>>>> }
>>>>>> ``` 
>>>>> </details>
>>>> </details>
>>>> <details>
>>>>  <summary>3.3- Create a <code>component.scss</code> file</summary>
>>>>
>>>>> <details>
>>>>>  <summary>3.3.1- Create <code>component.scss</code></summary>
>>>>>
>>>>>> ``` 
>>>>>> touch src/components/my-accordion/my-accordion.scss
>>>>>> ``` 
>>>>> </details> 
>>>>> <details>
>>>>>  <summary>3.3.2- Fill out <code>component.scss</code> file</summary>
>>>>>
>>>>>> ``` 
>>>>>> * {
>>>>>>     font-family: 'Lato', sans-serif;
>>>>>> }
>>>>>> 
>>>>>> .container {
>>>>>>     display: flex;
>>>>>>     flex-direction: column;
>>>>>>     justify-content: center;
>>>>>>     align-items: center
>>>>>> }
>>>>>> 
>>>>>> .accordion {
>>>>>>     cursor: pointer;
>>>>>>     padding: 18px;
>>>>>>     text-align: left;
>>>>>>     border-radius: 20px;
>>>>>>     font-size: 1.2rem;
>>>>>>     font-weight: bold;
>>>>>>     outline: 0;
>>>>>>     span {
>>>>>>         float: right;
>>>>>>     }
>>>>>> }
>>>>>>  
>>>>>>  .open {
>>>>>>     display: block;
>>>>>>     height: auto;
>>>>>>     border-radius: 20px;
>>>>>>     border: 0.5px solid rgb(199, 197, 197);
>>>>>>     width: 200px;
>>>>>>  }
>>>>>> 
>>>>>>  p {
>>>>>>     padding: 18px;
>>>>>>  }
>>>>>> 
>>>>>>  .close {
>>>>>>     display: none;
>>>>>>  }
>>>>>> ``` 
>>>>> </details>
>>>> </details>
>>>> <details>
>>>>  <summary>3.4- Insert the <code>component</code> into the <code>body</code> <code>index.html</code></summary>
>>>>
>>>>> ``` 
>>>>> <body>
>>>>>   <my-accordion width='100%' 
>>>>>                 label='Bacon Ipsum'
>>>>>                 color='pink'
>>>>>                 description="Bacon ipsum dolor amet pork chop sausage turkey spare ribs ham hock cupim pork loin capicola bacon ham filet mignon prosciutto boudin turducken. Shank corned beef burgdoggen jowl ribeye. Ham pork pastrami rump meatball buffalo venison andouille picanha fatback pork loin. Venison doner porchetta, chicken leberkas fatback burgdoggen ham andouille landjaeger alcatra. Pork belly pork jerky prosciutto leberkas tail salami tongue frankfurter turducken short loin flank."></my-accordion>
>>>>>   <my-accordion width='100%'
>>>>>                 label='Cat Ipsum'
>>>>>                 color='aquamarine'
>>>>>                 description="Human give me attention meow i want to go outside let me go outside nevermind inside is better but cats are cute flex claws on the human's belly and purr like a lawnmower find something else more interesting, yet lick sellotape lick butt and make a weird face. The cat was chasing the mouse lick the plastic bag for furrier and even more furrier hairball but scratch at door to be let outside, get let out then scratch at door immmediately after to be let back in. "></my-accordion>
>>>>>   <my-accordion width='100%'
>>>>>                 color='#eee'
>>>>>                 description="I feel empty."></my-accordion>
>>>>> </body>
>>>>> ``` 
>>>> </details>
>>>> <details>
>>>>  <summary>3.5- Run <code>npm start</code></summary>
>>>>
>>>>> ``` 
>>>>> npm start
>>>>> ``` 
>>>> </details>
>>>> <details>
>>>>  <summary>3.6- Publish your package</summary>
>>>>
>>>>> <details>
>>>>>  <summary>3.6.1- Build your component</summary>
>>>>>
>>>>>> ``` 
>>>>>> npm run build
>>>>>> ``` 
>>>>> </details>
>>>>> <details>
>>>>>  <summary>3.6.2- Publish your compnent</summary>
>>>>>
>>>>>> ``` 
>>>>>> npm publish
>>>>>> ``` 
>>>>> </details>
>>>> </details>
>>> </details>
