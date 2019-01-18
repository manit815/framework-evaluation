import React from 'react';
//import './Form.css';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';




class Form extends React.Component {
    // constructor(props) {
    //     super(props);
    //     const state = {
    //         fname: 'demo'
            
    //     };
       
    // }
    state = {
        fname: '',
        lname: ''        
      };

    handleChange = event => {
        const {name, value} = event.target;
    
        this.setState({
            name : value
        });
    }

    // submitForm = () => {
    //     this.props.handleSubmit(this.state);
    //     this.makeAjaxCall();
    //     this.setState(this.initialState);
    // }

    // makeAjaxCall() {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //           console.log(result);
    //           // this.setState({
    //           //   isLoaded: true,
    //           //   items: result.items
    //           // });
    //         },
    //         // Note: it's important to handle errors here
    //         // instead of a catch() block so that we don't swallow
    //         // exceptions from actual bugs in components.
    //         (error) => {
    //           // this.setState({
    //           //   isLoaded: true,
    //           //   error
    //           // });
    //         }
    //       )
    //   }
   
    
   
    render() {
        const { classes } = this.props;     
        
    
        return (
            <form className="accountForm" noValidate autoComplete="off">
                 <TextField
                    id="fname"
                    label="First Name"
                    className="firsname"
                    value={this.state.fname}
                    name= "fname"
                    onChange={this.handleChange}
                    margin="normal"
                    />    
                <TextField
                    id="lname"
                    label="Last Name"
                    className="lastname"
                    value={this.state.lname}
                    name= "lname"
                    onChange={this.handleChange}
                    margin="normal"
                    />                
            </form>
        );
    }   
    
}

export default Form ;