import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { TextField, MenuItem, Select, RadioGroup, Radio, Checkbox, FormControlLabel, Card, CardContent, Button, InputLabel, FormControl, Grid } from '@material-ui/core/';
import 'date-fns';
import DateFnsUtils from 'date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';

// import RaisedButton from '@material-ui/RaisedButton';

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

class TestForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = { fName: '', lName: '', nationality: 'Indian', gender: '', tandc: '',selectedValue: 'female', selectedDate: ''};
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
        alert('A account was submitted:' + JSON.stringify(this.state));
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(this.state)
        })
        this.resetFields();
        event.preventDefault();
    }

    resetFields(){        
        this.setState({
            fName: '',
            lName: '',
            nationality:'',
            gender:'',
            tandc:''
        })        
    }

    render() {
        const { classes } = this.props;
        return (
            <form onSubmit={this.handleSubmit} noValidate autocomplete="off">
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
                                            checked={this.state.selectedValue === 'female'} 
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
                                    id="lName"
                                    label="Last Name"
                                    className="lName"
                                    name="lName"
                                    value={this.state.lName}
                                    onChange={this.handleChange('lName')}
                                    margin="normal"
                                />
                            </div>

                             {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container className={classes.grid} justify="space-around">
                                <DatePicker
                                    margin="normal"
                                    label="Date picker"
                                    value={this.selectedDate}
                                    onChange={this.handleDateChange}
                                />
                                </Grid>
                            </MuiPickersUtilsProvider> */}

                            <FormControl>
                                <div id="nationality">
                                    <InputLabel htmlFor="nationality-helper">Nationality</InputLabel>
                                        <Select
                                            value={this.state.nationality}
                                            onChange={this.handleChange('nationality')}
                                            style={{width:'195px',marginTop:'20px'}}                                    
                                        >
                                            {nationalityArr.map(option => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    <em>{option.label}</em>
                                                </MenuItem>
                                            ))}                                   
                                    </Select>
                                </div>
                            </FormControl>

                            <div id="tandc">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.tandc}
                                            label={"Accept terms and conditions"}
                                            onChange={this.handleChange('tandc')}
                                            value="tandc"
                                        />
                                    }
                                    label="Accept terms and conditions" />
                            </div>
                            <Button type="submit" value="Submit" variant="contained">
                                Default
                            </Button>                                                        
                        </CardContent>
                    </Card>
                </div>                
            </form>
        )
    }
}

// export default withStyles(styles) (TestForm);
export default TestForm;