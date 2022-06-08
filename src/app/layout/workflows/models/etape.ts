export const TransitionType = [
    "AUTOMATIQUE",
    "MANUELLE",
    "SOUS CONDITIONS"
]

export interface Intervenant
{
    profil: string;
    droit: string[];
}

export interface EtapeInputData
{
    numero: number; 
    roles : string[];
    etats : string[];
    actions: Action[];
}
export class Etape 
{
    numero !: number;
    nom !: string;
    description !: string;
    intervenant !: Intervenant[];
    actions !: Action[];
    etats !: string[];

    constructor(numero ?:number)
    {
        this.numero = numero || 0;
        this.nom = "";
        this.intervenant = [];
        this.actions = [];
    }
}

export class Action
{
    id !: number;
    nom !: string;
    description ?: string;
    icone ?: string;
    resultats !: string[];

    constructor(nom: string)
    {
        this.nom = nom;
        this.resultats = [];

    }
}