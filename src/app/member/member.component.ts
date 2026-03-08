import { Component, OnInit } from '@angular/core';
import { Member } from '../Modeles/member';
import { MemeberService } from 'src/services/memeber.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  constructor(private MS:MemeberService,private dialog:MatDialog) { }
datasource:Member[]=[];
ngOnInit(): void {
  //appeler le service pour recuperer les membres
  this.MS.getAllMembers().subscribe((data)=>{
    this.datasource=data;
  });
}
displayedColumns: String[] = ['id', 'cin', 'name','type', 'age', 'email', 'action'];
editMember(row:Member){
  console.log('edit member',row);
}
deleteMember(id:String){
  //lancer la boite de dialogue de confirmation
  const dialogRef = this.dialog.open(ConfirmComponent);
  //attendre le click de l'utilisateur sur le bouton de confirmation
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      //si l'utilisateur confirme la suppression
  this.MS.deleteMember(id).subscribe(()=>{
    //apres la suppression on doit rafraichir la liste des membres
    this.MS.getAllMembers().subscribe((data)=>{
      this.datasource=data;
    });
  });
    }
  });

}

 
}

