/* Integrate polymer paper input web component with react app
    Reference - https://medium.com/jens-jansson/start-using-web-components-in-react-6ccca2ca21f9*/

import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import { TextField, MenuItem, Select, RadioGroup, Radio, Checkbox, FormControlLabel, Card, CardContent, Button, InputLabel, FormControl, Grid } from '@material-ui/core/';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {PolymerElement, html} from '@polymer/polymer';
import PaperInputElement from '@polymer/paper-input/paper-input.js';
import '@vaadin/vaadin-date-picker';
import { shallow } from './enzyme.js';

const styles = {
    nationality: {
        width: '100px'
    } 
};
const nationalityArr = [
    {
      value: 'Indian',
      label: 'Indian',
    },
    {
      value: 'Australian',
      label: 'Australian',
    },
    {
      value: 'Dutch',
      label: 'Australian',
    }
  ];

/*React component*/
class TestForm extends Component {    
    constructor(props) {
        super(props);
        this.state = { 
            gender: '',
            fName: '',
            lName: '',
            dob: '',
            nationality: 'Indian',           
            address:'',
            tandc: '' 
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = name => event => {        
        if (name === 'tandc') {
            this.setState({
                [name]: event.target.checked,
            });
        } else {
            this.setState({
                [name]: event.target.value,
            });
        }
    };

    handleSubmit(event) {     
        
        
        const wrapper = shallow(<TestForm />);
        console.log('helo',wrapper.find('Toolbar'));

        var dob = document.querySelector('#dob');     
        var address = document.querySelector('#address'); 
        
        this.state.dob = dob.value;
        this.state.address = address.value;
        alert('Account created successfully');
        //console.log('A account was submitted:' + JSON.stringify(this.state));
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(this.state)
        })
        this.resetFields();
        event.preventDefault();
    }

    resetFields(){        
        this.setState({
            gender:'',
            fName: '',
            lName: '',
            nationality:'',
            dob:'',
            address:'',
            tandc:''            
        })        

        var dob = document.querySelector('#dob');     
        var address = document.querySelector('#address');
        dob.value = '';
        address.value = '';
    }

    render() {
        const { classes } = this.props;
       
        return (
            <div>
                <AppBar position="static">
                    <Toolbar className="header">
                    Create an Account
                    </Toolbar>
                </AppBar>
            
                <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
                    <div>                    
                        <Card>
                            <CardContent> 
                                <FormControl>
                                    <RadioGroup id="genderRadioBtns" value={this.state.gender}
                                        onChange={this.handleChange('gender')}                               >
                                    
                                            <FormControlLabel                                            
                                                value="male" 
                                                control={<Radio />} 
                                                label="Male" />
                                            <FormControlLabel                                             
                                                value="female" 
                                                control={<Radio />} 
                                                label="Female" />
                                        
                                    </RadioGroup>                               
                                </FormControl>  

                                <div id="firstName">
                                    <TextField
                                        id="fName"
                                        label="First Name"
                                        className="fName"
                                        name="fName"
                                        value={this.state.fName}
                                        onChange={this.handleChange('fName')}
                                        margin="normal"
                                    />
                                </div>

                                <div id="lastName">
                                    <TextField
                                        //id="lName"
                                        label="Last Name"
                                        className="lName"
                                        name="lName"
                                        value={this.state.lName}
                                        onChange={this.handleChange('lName')}
                                        margin="normal"
                                    />
                                </div>                           

                                <div id="dobpicker">
                                    <vaadin-date-picker
                                        id="dob" 
                                        label="Date of birth (polymer)" 
                                        value={this.state.dob}
                                    ></vaadin-date-picker>
                                </div>

                                <div id="nationality">
                                    <FormControl>                              
                                            <InputLabel htmlFor="nationality-helper">Nationality</InputLabel>
                                                <Select
                                                    value={this.state.nationality}
                                                    onChange={this.handleChange('nationality')}
                                                    style={{width:'195px',marginTop:'20px'}}                                    
                                                >
                                                    {nationalityArr.map(option => (
                                                        <MenuItem className="item" key={option.value} value={option.value}>
                                                            <em>{option.label}</em>
                                                        </MenuItem>
                                                    ))}                                   
                                            </Select>                               
                                    </FormControl>
                                </div>

                                <div id="addressElmt">
                                    <paper-input
                                        label="Address (polymer)"
                                        id="address" 
                                        value={this.state.address}                            
                                    ></paper-input>  
                                </div>

                                <div id="tandc">
                                    <FormControlLabel
                                        control= {
                                            <Checkbox
                                                checked={this.state.tandc}
                                                label={"Accept terms and conditions"}
                                                onChange={this.handleChange('tandc')}
                                                value="tandc"
                                            />
                                        }
                                        label="Accept terms and conditions" />
                                </div>
                                <Button type="submit" id="submitBtn" value="Submit" variant="contained">
                                    Submit
                                </Button>                                                        
                            </CardContent>
                        </Card>
                    </div>                
                </form>
            </div>
        )
    }
}

// export default withStyles(styles) (TestForm);
export default TestForm;