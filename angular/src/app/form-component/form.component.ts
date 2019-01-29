import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-date-picker';



@Component({
  selector: 'app-forms-page',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {

  userDetailsForm: FormGroup;

  nationality = [
    "Indian",
    "Australian",
    "Dutch"
  ];


  constructor(private fb: FormBuilder,private data: DataService, private el: ElementRef) { }

  ngOnInit() {
    this.createForms();
  }

  createForms() {

    // user details form initialize
    this.userDetailsForm = this.fb.group({
      gender:[''],
      firstname:['First name'],
      lastname: ['Last Name'],
      address: ["Your address"],
      birthday: [''],
      national: new FormControl(this.nationality[0]),
      terms: new FormControl(false)
    });

  }

  onSubmitUserDetails(value){
    console.log(this.el.nativeElement.querySelector('#dob').value);       
    var dob = this.el.nativeElement.querySelector('#dob').value;
    value.birthday = dob;
    this.data.postUserDetails(value).subscribe(
       function(data){
        console.log(data);
      }  
    );
  }

  datepicker(event){
    console.log(event);
  }
}
