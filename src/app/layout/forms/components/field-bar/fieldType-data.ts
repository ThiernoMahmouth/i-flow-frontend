import { TypeChamp } from "../../models/Champ.model";

export interface Field
{
    label: string;
    icon: string;
    type: TypeChamp;
    realType: string;
}

export const FIELD_TYPE_DATA = [
    {
        label:"Texte d'une seule ligne",
        icon: "text_format",
        type: TypeChamp.INPUT,
        realType: "text"
    },
    {
        label:"Texte de plusieurs lignes",
        icon: "subject",
        type: TypeChamp.TEXTAREA,
        realType: "textarea"
    },
    {
        label:"Menu déroulant",
        icon: "",
        type: TypeChamp.SELECT,
        realType: "select"
    },
    {
        label:"Choix unique",
        icon: "",
        type: TypeChamp.INPUT,
        realType: "radio"
    },
    {
        label:"Choix multiple",
        icon: "check",
        type: TypeChamp.INPUT,
        realType: "checkbox"
    },
    {
        label:"Pièce jointe",
        icon: "attachment",
        type: TypeChamp.INPUT,
        realType: "file"
    },
    {
        label:"Adresse e-mail",
        icon: "mail_outline",
        type: TypeChamp.INPUT,
        realType: "email"
    },
    {
        label:"Date",
        icon: "date_range",
        type: TypeChamp.INPUT,
        realType: "date"
    } 
]