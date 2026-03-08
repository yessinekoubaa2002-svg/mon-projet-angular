import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { MemeberService } from 'src/services/memeber.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
form!:FormGroup;
idcourant!:String;
constructor(private MS:MemeberService,private router:Router,private activatedRoute:ActivatedRoute) { }
ngOnInit(): void {
  //recuperer la route active pour savoir si on est dans le cas de creation ou de modification
  this.idcourant=this.activatedRoute.snapshot.params['id'];
    
  //recuperer l'id du membre a modifier
  if(this.idcourant){
    this.MS.getMemberById(this.idcourant).subscribe((data)=>{
      //initialiser le formulaire avec les données du membre a modifier
      this.form=new FormGroup({
        cin:new FormControl(data.cin,[Validators.required]),
        name:new FormControl(data.name),
        type:new FormControl(data.type),
        age  :new FormControl(data.age),
        email:new FormControl(data.email),
      });
    });
  }
  else{
    //sinon on est dans le cas de creation
//recuperer les données du membre a modifier
  this.form=new FormGroup({
    cin:new FormControl('null',[Validators.required]),
    name:new FormControl('null'),
    email:new FormControl('null'),
    type:new FormControl('null')  
    
  });
}
}
sub(){
  if(this.idcourant){
    this.MS.updateMember({...this.form.value,id:this.idcourant}).subscribe(()=>{
      //redirection vers ''
      this.router.navigate(['']); ;
    });
    return;
  }else{
  console.log(this.form.value);
  this.MS.addMember(this.form.value).subscribe(()=>{
  //redirection vers ''
  this.router.navigate(['']); ;
});
}
}

}
