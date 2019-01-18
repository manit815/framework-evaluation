import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import {TextField, MenuItem, Select} from '@material-ui/core/';
// import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
// import 

class TestForm extends Component {
    constructor(props) {
        super(props);
        this.state = { fName: '', lName: '', nationality: '' };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // state = { fName: '' };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
        console.log(this.state);
    };

    handleSubmit(event) {
        console.log(event);
        console.log(this.state);
        alert('A name was submitted:' + this.state.value);
        event.preventDefault();
    }

    render() {
        const { classes } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                {/* <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                </label> */}
                <div>
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
                <div>
                    <TextField
                        id="lName"
                        label="Last Name"
                        className="lName"
                        name="lName"
                        value={this.state.lName}
                        onChange={this.handleChange('lName')}
                        margin="normal"
                    />
                </div>
                <div>
                    <Select
                        value={this.state.nationality}
                        onChange={this.handleChange('nationality')}
                        name="nationality"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'Indian'}>Indian</MenuItem>
                        <MenuItem value={'Australian'}>Australian</MenuItem>
                        <MenuItem value={'Dutch'}>Dutch</MenuItem>
                    </Select>
                </div>
                {/* <input type="submit" value="Submit"></input> */}
            </form>
        )
    }
}

export default TestForm;