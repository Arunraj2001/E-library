import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }
frmgrp = new FormGroup({
  firstname: new FormControl('',[Validators.required]),
  lastname: new FormControl('',[Validators.required]),
  email: new FormControl('',[Validators.email]),
  password: new FormControl('',[Validators.required])
})
  ngOnInit(): void {
    
  }
  regbtn(){

  }
}
