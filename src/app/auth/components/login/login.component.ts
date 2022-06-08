import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  loginForm !: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  private returnUrl !: string;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void
  {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit()
  {
    
  }

}
