import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logfrm = new FormGroup({
    username : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
  })

  userinvalid:boolean = false;
  constructor(private rot:Router) { }


ngOnInit(): void {

}
logbtn(){
console.log(this.logfrm.value)
if(this.logfrm.controls.username.value !='admain' || this.logfrm.controls.password.value!= 'arun123'){
this.userinvalid = true;
}
else{
  this.userinvalid=false;
  localStorage.setItem('usrnm',this.logfrm.controls.username.value);
  this.rot.navigateByUrl('/register');
}
}
}

