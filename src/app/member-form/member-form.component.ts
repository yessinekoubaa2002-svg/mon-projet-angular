import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { MemeberService } from 'src/services/memeber.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
form!:FormGroup;
constructor(private MS:MemeberService,private router:Router) { }
ngOnInit(): void {

  this.form=new FormGroup({
    cin:new FormControl('null',[Validators.required]),
    name:new FormControl('null'),
    email:new FormControl('null'),
    type:new FormControl('null')  
    
  });
}
sub(){
  console.log(this.form.value);
  this.MS.addMember(this.form.value).subscribe(()=>{
  //redirection vers ''
  this.router.navigate(['']); ;
});
}


}