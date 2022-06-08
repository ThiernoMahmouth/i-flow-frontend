import { Field } from "../components/field-bar/fieldType-data";

export interface Validator 
{
    name: string;
    validator: any;
    message: string;
}

export interface Attribut
{
    nom: string;
    valeur: string;
}

export enum TypeChamp
{
    INPUT = "input",
    SELECT = "select",
    BUTTON = "button",
    TEXTAREA = "textarea"
}

/*
export interface Field
{
    label: string;
    icon: string;
    type: TypeChamp;
}
*/
export class Champ
{
    label !: string;
    name !: string;
    type !: TypeChamp;
    field !: Field;
    order !: number;
    value !: string ;
    attributs !: Attribut[];
    description ?: string ;
    helperText ?: string;
    validations?: Validator[];
    options ?: {key: string, value: string}[];

    constructor(){}
}