import { Champ } from "./Champ.model";

export class Form
{
    id ?: number;
    titre: string;
    description ?: string;
    enctype ?:string;
    champs : Champ[];


    constructor(titre?: string, champs?: Champ[], enctype?: string , description?: string)
    {
        this.titre = titre ?? "";
        this.enctype = enctype;
        this.champs = champs ?? [];
        if (description)
            this.description = description
    }
}