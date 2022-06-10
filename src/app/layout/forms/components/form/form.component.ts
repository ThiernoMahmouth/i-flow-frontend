import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Form } from '../../models/Form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit 
{
 form !: Form;

  constructor(private activatedRoute: ActivatedRoute, private router: Router)
  { }

  ngOnInit(): void 
  {
    console.log(history.state);
    this.form = history.state;
    // console.log(this.location.getState());
    console.log("*************************")
    console.log(this.form)
  }

}
