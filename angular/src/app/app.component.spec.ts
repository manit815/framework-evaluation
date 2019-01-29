import { TestBed, async} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { DatePickerElement } from '@vaadin/vaadin-date-picker';

import {
  MatButtonModule,
  MatRadioModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatSelectModule
} from '@angular/material';
import { FormComponent } from '../app/form-component/form.component'


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ RouterTestingModule ] 
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});

describe('FormComponent', () => {
  beforeEach(async(() => {                           
    TestBed.configureTestingModule({
      declarations: [
        FormComponent
      ],
      imports: [ RouterTestingModule, 
        ReactiveFormsModule,
        FormsModule,
        MatRadioModule,  
        MatButtonModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSelectModule,
        HttpClientTestingModule,
       ] ,
       schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FormComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have heading account details', () => {
    const fixture = TestBed.createComponent(FormComponent);
    let el = fixture.debugElement.query(By.css('.section-title'));
    let spanEl = el.nativeElement;
    expect(spanEl.innerHTML).toBe('Account details');
  });

  it('should have vaadin date picker', () => {
    const fixture = TestBed.createComponent(FormComponent);
    debugger;
    let el = fixture.debugElement.query(By.css('vaadin-date-picker'));
    let spanEl = el.nativeElement;
    expect(spanEl).toBeTruthy
  });


});
