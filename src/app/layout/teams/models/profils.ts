import { User } from "./user";


export class Profil
{
    id ?: number;
    nom !: string;
    createdAt !: Date;
    lastUpdatedAt !: Date;
    users !: User[];
    dataSource : any;

    public constructor(nom : string)
    {
        this.nom = nom;
        this.createdAt = new Date();
        this.lastUpdatedAt = new Date();
        this.users = [];
    }
}