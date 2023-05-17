import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  checkoutForm = this.formBuilder.group({inEmail:"",inSenha:""});

  constructor(private formBuilder:FormBuilder) {

  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
