import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            fname: '',
            lname: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const {name, value} = event.target;
    
        this.setState({
            [name] : value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.makeAjaxCall();
        this.setState(this.initialState);
    }

    makeAjaxCall() {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result);
              // this.setState({
              //   isLoaded: true,
              //   items: result.items
              // });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              // this.setState({
              //   isLoaded: true,
              //   error
              // });
            }
          )
      }

    render() {
        const { fname, lname } = this.state; 
    
        return (
            <form>
                <div className ="container">

                    <label><b>Gender</b></label>
                    <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios"/>
                        <label className="custom-control-label" htmlFor="defaultUnchecked">Male</label>
                    </div>


                    <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input" id="defaultChecked" name="defaultExampleRadios" defaultChecked/>
                        <label className="custom-control-label" htmlFor="defaultChecked">Female</label>
                    </div>  

                    <div className="form-group form-inline">
                        <label><b>First Name</b></label>
                        <input type="text" name="fname" value={fname} required onChange={this.handleChange}/>

                        <label><b>Last Name</b></label>
                        <input type="text" name="lname" value={lname} required onChange={this.handleChange}/>
                    </div>                     

                    

                    <label><b>Nationality</b></label>
                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" id="btnDropdownDemo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select
                        </button>
                        <div className="dropdown-menu" aria-labelledby="btnDropdownDemo">
                            <a className="dropdown-item" href="#">Bootstrap 4</a>
                            <a className="dropdown-item" href="#">jQuery</a>
                            <a className="dropdown-item" href="#">HTML</a>
                            <a className="dropdown-item" href="#">CSS</a>
                        </div>
                    </div>     

                    <div class="form-group col-md-2"> 
                    <label for="selectDemo">Select Year</label>                
                    <select class="form-control" id="selectDemo">
                
                    <option>1980</option>
                
                    <option>1981</option>
                
                    <option>1982</option>
                
                    <option>1982</option>
                
                    <option>....</option>
                
                    </select>
                
                </div>               

                        <label><b>Address</b></label>
                        <textarea className="form-control" rows="5" id="comment" required></textarea>

                    <label>
                        <input type="checkbox" name="remember"/> Accept the terms and conditions
                    </label> 

                    <button type="button" className="btn btn-primary btn-lg submitBtn" onClick={this.submitForm}>Submit</button>
                        
                </div>
                
            </form>
        );
    }   
    
}
export default Form;