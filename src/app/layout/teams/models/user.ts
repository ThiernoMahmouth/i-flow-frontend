export class User
{
    id ?: number;
    nom !: string;
    prenom !: string;
    email !: string;
    createdAt !: Date;
    lastUpdatedAt !: Date;

    constructor(nom: string, prenom: string, email:string )
    {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
    }
}