import { Etape } from "./etape";

export const DROIT = [
    'CREER', 
    'MODIFIER',
    'VISUALISER',
    'SUPPRIMER'
]
export interface WorkflowInterface
{
    name: string;
    description:string;
    organisation: string;
    createdTime: Date;
    lastUpdatedTime: Date;

}

export class Workflow
{
    id ?: number
    name !: string;
    description !:string;
    nbEtapes !: number;
    organisation !: string;
    createdTime !: Date;
    lastUpdatedTime !: Date;
    etapes !: Etape[]

    constructor()
    {
        this.name = "";
        this.nbEtapes = 0;
        this.etapes = [];
    }

}


