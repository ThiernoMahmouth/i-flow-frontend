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
  champs !: Champ[];
  champ !: Champ;
  constructor() { }

  ngOnInit(): void 
  {
    if (history.state.formulaire)
      this.form = history.state.formulaire;
    else 
      this.form = new Form();
    this.fields = [];
    this.champs = [];
  }
  
  onAddField(field: Field)
  {
    this.champ = new Champ();
    this.champ.field = field;
    this.form.champs.push(this.champ);
    this.fields.push(field);
    this.champs.push(this.champ);
    // console.log(JSON.stringify(this.form));
  }
}
