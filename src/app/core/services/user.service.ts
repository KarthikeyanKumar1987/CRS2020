import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { JsonApiService } from "@app/core/services/json-api.service";

const defaultUser = {
  username:"Guest"
}
@Injectable()
export class UserService {
  public user$ = new BehaviorSubject({...defaultUser});  
  inValidCredential:boolean=false;
  constructor(private jsonApiService: JsonApiService) { 
    let UserName=JSON.parse(localStorage.getItem("UserInfo")); 

    if(UserName!=null){
      if(UserName.length!=0){
        this.user$.next(UserName[0]);
      }
      else{
        this.user$.next({...defaultUser})
      }
    }
    
  }

  public logout(){
    this.user$.next({...defaultUser})
  } 
}
