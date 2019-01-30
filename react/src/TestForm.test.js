import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from './enzyme.js';
import TestForm from './TestForm.js';

it('renders testForm component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('appbar text',() => {
  it('Appbar text match', () => {
    const wrapper = shallow(<TestForm />);    
    const header = wrapper.find('.header').props().children; 

    expect(header).toEqual('Create an Account');
  });
})

describe('Nationality dropdown', () => {
  it('renders nationality dropdown options', () => {
    const items = ['one', 'two', 'three'];
    const wrapper = shallow(<TestForm items={items} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.item')).toHaveLength(items.length);
  });

  it('renders correct text in item', () => {    
    const wrapper = shallow(<TestForm />);

    //Expect the child of the first item 
    const item = wrapper.find('.item').get(0).props.children;    
    expect(item).toEqual(<em>Indian</em>);
  });
});

describe('First Name', () => {  
  it('renders firstname with empty value', () => {    
    const wrapper = shallow(<TestForm/>);
    expect(wrapper.find('#fName').get(0).props.value).toEqual('');
  });
  // it('renders firstname with value maxlimit is 10', () => {
  //   const fname = '1234567890';
    
  //   const wrapper = shallow(<TestForm/>);
  //   wrapper.find('#fName').get(0).setValue(fname);
  //   expect(wrapper.find('#fName').get(0).props.value).toHaveLength(10);
  // });
}); 


