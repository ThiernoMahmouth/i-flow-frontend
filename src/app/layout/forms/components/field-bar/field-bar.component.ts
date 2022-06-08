import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Field, FIELD_TYPE_DATA } from './fieldType-data';

@Component({
  selector: 'app-field-bar',
  templateUrl: './field-bar.component.html',
  styleUrls: ['./field-bar.component.css']
})
export class FieldBarComponent implements OnInit
{
  @Output() addField: EventEmitter<Field> = new EventEmitter();
  fieldType = FIELD_TYPE_DATA;

  constructor() { }

  ngOnInit(): void 
  {
  }

  add(field: Field)
  {
    this.addField.emit(field);
  }
}
