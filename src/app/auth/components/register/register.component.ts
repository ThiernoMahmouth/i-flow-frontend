import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit 
{
  registerForm !: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  private returnUrl !: string;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void
  {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit()
  {
    
  }
}
