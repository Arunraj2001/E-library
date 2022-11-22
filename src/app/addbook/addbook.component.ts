import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private rot:Router) { }

  mybooks: any[] = [];

  addbk= new FormGroup({
    bookid : new FormControl('',[Validators.required]),
    booktitle : new FormControl('',[Validators.required]),
    bookdesc : new FormControl('',[Validators.required]),
    authname : new FormControl('',[Validators.required]),
    nmbook : new FormControl('',[Validators.required]),

  })
  ngOnInit(): void {
    let username = localStorage.getItem('usrnm');
  if( username==null || username == '' ){
    this.rot.navigateByUrl('/login')
  }
  }
  addbok(){
    console.log(this.mybooks);
    
    var bid = this.addbk.get('bookid')?.value;
    var title = this.addbk.get('booktitle')?.value;
    var bokde = this.addbk.get('bookdesc')?.value;
    var aname= this.addbk.get('authname')?.value;
    var numbooks = this.addbk.get('nmbook')?.value;

      this.mybooks.push({
        bookid : bid,
        booktitle:title,
        bookdesc:bokde,
        authname:aname,
        nmbook:numbooks,

      
        
      })
  }

}
