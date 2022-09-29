import React from 'react';
import './QuestionandAns.css'

const QuestionandAns = () => {
    return (
        <div>
            <h1 className='headline'>Milestone - 8 Basic QNA</h1>
            <div className='first'>
                <h3 className='second'><small>Question ~ 1:</small> How Does React Work?</h3>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            </div>
            <div className='first'>
                <h3 className='second'><small>Question ~ 2</small> What is the Difference Between Props and State?</h3>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
            </div>
            <div className='first'>
                <h3 className='second'><small>Question ~ 3</small>what does useeffect() hook do in react except data load from api</h3>
                <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
            </div>
        </div>
    );
};

export default QuestionandAns;