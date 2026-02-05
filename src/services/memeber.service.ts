import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';// The @Injectable decorator is used to define a service in Angular. It allows the service to be injected into components or other services that need it.
import { Observable } from 'rxjs';
import { Member } from 'src/app/Modeles/member';

@Injectable({
  providedIn: 'root'// This means that the service will be available as a singleton throughout the application. It can be injected into any component or other service that needs it.
})
export class MemeberService {
  constructor(private httpClient:HttpClient) { }
getAllMembers():Observable<Member[]>{
  //generer une requete http en mode get
return this.httpClient.get<Member[]>('http://localhost:3000/members');
}
addMember(member:Member):Observable<void>{
  return this.httpClient.post<void>('http://localhost:3000/members',member);  
}
updateMember(member:Member):Observable<void>{
  return this.httpClient.put<void>(`http://localhost:3000/members/${member.id}`,member);  
}
deleteMember(id:string):Observable<void>{
  return this.httpClient.delete<void>(`http://localhost:3000/members/${id}`);  
}
}
