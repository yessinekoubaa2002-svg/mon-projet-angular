import { Component } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
datasource:any[]=[
  {id:1,cin:'1234',name:"john",type:"teacher",age:23},
  {id:2,cin:'5678',name:"smith",type:"student",age:25},
  {id:3,cin:'9012',name:"jane",type:"student",age:22},
  {id:4,cin:'3456',name:"peter",type:"teacher",age:24}
];
displayedColumns: string[] = ['id', 'cin', 'name','type', 'age','action'];
editMember(row:any){
  console.log('edit member',row);
}
deleteMember(row:any){
  console.log('delete member',row);
}
}

 


