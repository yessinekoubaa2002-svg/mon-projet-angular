import { Component, OnInit } from '@angular/core';
import { Member } from '../Modeles/member';
import { MemeberService } from 'src/services/memeber.service';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  constructor(private MS:MemeberService) { }
datasource:Member[]=[];
ngOnInit(): void {
  //appeler le service pour recuperer les membres
  this.MS.getAllMembers().subscribe((data)=>{
    this.datasource=data;
  });
}
displayedColumns: String[] = ['id', 'cin', 'name','type', 'age','action'];
editMember(row:Member){
  console.log('edit member',row);
}
deleteMember(id:String){
  this.MS.deleteMember(id).subscribe(()=>{
    //apres la suppression on doit rafraichir la liste des membres
    this.MS.getAllMembers().subscribe((data)=>{
      this.datasource=data;
    });
  });
}
}

 


