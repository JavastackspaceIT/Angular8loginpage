import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'login';
  constructor(private router: Router, private formBuilder: FormBuilder ) { }
  loginForm: FormGroup;
  isSubmitted  =  false;
  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
}

  get formControls() { return this.loginForm.controls; }


  login() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  //  this.authService.login(this.loginForm.value);
  //  this.router.navigateByUrl('/admin');

    console.log('login page ' +  this.loginForm.value);
  }
}
