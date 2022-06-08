import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { MatTableDataSource } from '@angular/material/table';
import { Profil } from '../../models/profils';
import { User } from '../../models/user';

@Component({
  selector: 'app-profils',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.css']
})
export class ProfilsComponent implements OnInit 
{
  @ViewChild(MatAccordion) accordion !: MatAccordion;

  displayedColumns: string[] = ['Nom', 'Prenom', 'Email', 'Actions'];
  profils !: Profil[];

  users1!: User[];
  users2!: User[];
  users3!: User[];

  pro !: Profil;

  constructor(public dialog : MatDialog) { }

  ngOnInit(): void 
  {

    this.profils = [];
    this.users1 = []
    this.users1.push(new User("KA", "Gallo", "gallo@esp.sn"))
    this.users1.push(new User("DIENG", "Djiby", "djiby@innov.africa"))
    this.users1.push(new User("GNING", "Muhammad", "muhammad@esp.sn"))
    this.pro = new Profil("ADMIN");
    this.pro.users = this.users1;
    this.pro.dataSource = new MatTableDataSource(this.pro.users)
    this.profils.push(this.pro);
    /******** */
    this.users2 = []
    this.users2.push(new User("THIOYE", "Astou", "astou@gmail.com"))
    this.users2.push(new User("GNING", "Muhammad", "muhammad@esp.sn"))
    this.users2.push(new User("NGUISSAN", "Malick", "malick@gmail.com"))
    this.pro = new Profil("USER");
    this.pro.users = this.users2;
    this.pro.dataSource = new MatTableDataSource(this.pro.users)
    this.profils.push(this.pro);
    this.users3 = [];
    this.users3.push(new User("DIENG", "Djiby", "djiby@innov.africa"))
    this.users3.push(new User("DIOP", "Maguette", "mags@innov.africa"))
    this.users3.push(new User("DIOP", "Assane", "assane@innov.africa"))
    this.users3.push(new User("MBACKE", "Aladji", "aladji@innov.africa"))
    this.pro = new Profil("INGENIEUR");
    this.pro.users= this.users3;
    this.pro.dataSource = new MatTableDataSource(this.pro.users)
    this.profils.push(this.pro);
  }

  applyFilter(event: Event) 
  {
    const filterValue = (event.target as HTMLInputElement).value;
    this.profils.forEach(element=>{
      element.dataSource.filter = filterValue.trim().toLowerCase();
    })
  }

  openAddProfilDialog()
  {
    const dialogRef = this.dialog.open(ProfilDialogComponent, {
      width: '275px',
      data: "",
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result != "")
      {
        this.profils.push(new Profil(result));
      }
    });
  }

}


/*********************************/
@Component({
  selector: 'app-profil-dialog',
  templateUrl: './profil-dialog.component.html',
  styleUrls: ['./profil-dialog.component.css']
})

export class ProfilDialogComponent
{
  constructor(public dialogRef: MatDialogRef<ProfilDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: string,
            ) {}

  onClose(): void 
  {
    this.dialogRef.close();
  }

  
}
