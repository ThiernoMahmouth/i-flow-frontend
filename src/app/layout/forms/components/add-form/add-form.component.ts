import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Champ } from '../../models/Champ.model';
import { Form } from '../../models/Form.model';
import { Field, FIELD_TYPE_DATA } from '../field-bar/fieldType-data';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit 
{
  fields !: Field[];
  form !: Form;
  champ !: Champ;
  constructor() { }

  ngOnInit(): void 
  {
    this.form = new Form();
    this.fields = []
  }
  
  onAddField(field: Field)
  {
    this.champ = new Champ();
    this.champ.field = field;
    this.form.champs.push(this.champ);
    this.fields.push(field);
    console.log(JSON.stringify(this.form));
  }
}
