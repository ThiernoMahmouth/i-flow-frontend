import { Component, OnInit } from '@angular/core';
import { Form } from '../../models/Form.model';

@Component({
  selector: 'app-list-forms',
  templateUrl: './list-forms.component.html',
  styleUrls: ['./list-forms.component.css']
})
export class ListFormsComponent implements OnInit {

  constructor() { }

  gridColumns = 2;

  formData !: Form[]

  ngOnInit(): void 
  {
    this.formData = [
    ];
  }

  notEmpty()
  {
    return this.formData.length === 0 ? false: true

      }
}
