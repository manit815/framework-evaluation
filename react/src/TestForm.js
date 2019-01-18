import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { TextField, MenuItem, Select, RadioGroup, Radio, Checkbox, FormControlLabel, Card, CardContent } from '@material-ui/core/';

const styles = {
    nationality: {
        width: '100px'
    }
};
class TestForm extends Component {
    constructor(props) {
        super(props);
        this.state = { firstName: '', lastName: '', nationality: '', gender: '', tandc: '' };
    }

    handleChange = name => event => {
        console.log(name, event);
        if (name === 'tandc') {
            this.setState({
                [name]: event.target.checked,
            });
        } else {
            this.setState({
                [name]: event.target.value,
            });
        }

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
                <div>
                    <Card>
                        <CardContent>
                            <div>
                                <RadioGroup value={this.state.gender}
                                    onChange={this.handleChange('gender')}
                                >
                                    <span>
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    </span>
                                </RadioGroup>
                            </div>
                            <div id="firstName">
                                <TextField
                                    id="fName"
                                    label="First Name"
                                    className="fName"
                                    name="fName"
                                    value={this.state.fName}
                                    onChange={this.handleChange('firstName')}
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
                                    onChange={this.handleChange('lastName')}
                                    margin="normal"
                                />
                            </div>
                            <div id="nationality">
                                <Select
                                    value={this.state.nationality}
                                    onChange={this.handleChange('nationality')}
                                    style={{width:'195px'}}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Indian'}>Indian</MenuItem>
                                    <MenuItem value={'Australian'}>Australian</MenuItem>
                                    <MenuItem value={'Dutch'}>Dutch</MenuItem>
                                </Select>
                            </div>

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
                        </CardContent>
                    </Card>
                </div>
            </form>
        )
    }
}

// export default withStyles(styles) (TestForm);
export default TestForm;