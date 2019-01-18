import React, { Component } from "react";
import TestForm from './TestForm';

class TestApp extends Component {

    // const element = (<h1 className="greeting">Hello world!</h1>);

    // const element = {
    //     type: 'h1',
    //     props: {
    //         className: 'greeting',
    //         children: 'Hello world'
    //     }
    // }

    render(){
        return (
        <div>
            <TestForm />
        </div>
        );
    }
}

export default TestApp;