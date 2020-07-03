import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient,HttpResponse} from "@angular/common/http";
import { UserInfo } from "@app/Models/UserInfo";
import { LoginParam} from "@app/Models/LoginParam";
import { EndPointsService } from "@app/Services/end-point.services";
import { IS_EXTENSION_OR_MONITOR_PRESENT } from '@ngrx/store-devtools/src/instrument';
import {UserService} from '@app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginparam:LoginParam=new LoginParam();
  res:any[];
  logo_url:string=this.endpoint.LogoUrl;
  inValidCredential:boolean=false;
    constructor(private router: Router,private userService:UserService,private httpClient:HttpClient,private endpoint:EndPointsService) { }
    ngOnInit() {
      
  }

  

  async login(event){
    event.preventDefault();
    this.inValidCredential=false;
    await this.httpClient.post(this.endpoint.LoginUrl,this.loginparam, { observe: 'response' })
    .subscribe((response: HttpResponse<UserInfo[]>) => {
      let usrdet=response.body;
      if(usrdet.length==1)
      {
        localStorage.setItem("UserInfo",JSON.stringify(usrdet));
        this.userService.user$.next(JSON.parse(localStorage.getItem("UserInfo"))[0]);
      this.router.navigate(['/home']);
      }else{
        this.inValidCredential=true;
      }
    });

    
  //  
  }

}
