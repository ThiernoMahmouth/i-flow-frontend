import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../models/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit 
{
  displayedColumns: string[] = ['Nom', 'Prénom', 'Email', 'Actions'];
  dataSource : any;
  users !: User[];
  
  constructor(public dialog : MatDialog) { }

  ngOnInit(): void 
  {
    this.users = []
    this.users.push(new User("KA", "Gallo", "gallo@esp.sn"))
    this.users.push(new User("GNING", "Muhammad", "muhammad@esp.sn"))
    this.users.push(new User("THIOYE", "Astou", "astou@gmail.com"))
    this.users.push(new User("NGUISSAN", "Malick", "malick@gmail.com"))
    this.users.push(new User("DIALLO", "Thierno", "thierno@gmail.com"))
    this.users.push(new User("DIENG", "Djiby", "djiby@innov.africa"))
    this.users.push(new User("DIOP", "Maguette", "mags@innov.africa"))
    this.users.push(new User("DIOP", "Assane", "assane@innov.africa"))
    this.users.push(new User("MBACKE", "Aladji", "aladji@innov.africa"))
    this.dataSource = new MatTableDataSource(this.users)
  }

  applyFilter(event: Event) 
  {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openAddUserDialog()
  {
    const user = new User("", "", "");
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '500px',
      data: user,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result.nom != "" && result.prenom != "")
      {
         this.users.push(result);
          this.dataSource.data = this.users;

      }
    });
  }

  supprimer(e:any)
  {
  }
}

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html'
})
export class UserDialogComponent 
{
  email !: string
  
  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  onAnnuler(): void {
    this.dialogRef.close();
  }
}

