import {Component, OnInit} from '@angular/core';
import {LoginInfoComponent} from "../../user/login-info/login-info.component";
import { AccesscontrolService } from '@app/Services/AccessControl/accesscontrol.service';
import { HttpResponse } from '@angular/common/http';
import { ScreenAccessRequest } from '@app/Models/AccessControl/RequestModel';
import {EndPointsService}from '@app/Services/end-point.services'
@Component({
  selector: 'sa-navigation',
  templateUrl: './navigation.component.html',
  providers: [AccesscontrolService]
})
export class NavigationComponent implements OnInit {

  screenAccessRequest: ScreenAccessRequest;
  screenList: Object;
  arrayName:number[]=[1,2,3,4,5,6,7,8,9,10,72,69,29]
  //screenList: any[] = [];
  
  constructor(private accesscontrolService: AccesscontrolService,private endpoint:EndPointsService) {
    this.screenAccessRequest = new ScreenAccessRequest();
  }

  async ngOnInit() {
    let userInfo = JSON.parse(localStorage.getItem("UserInfo"))[0];
    this.screenAccessRequest.UserId = userInfo.UserId;
    this.screenAccessRequest.UserDepartment = userInfo.Department;
   
    if(userInfo.Super_User==0){
      this.screenAccessRequest.UserType ="normaluser";
    }else{
      this.screenAccessRequest.UserType ="superuser";
    }
    const response = <HttpResponse<Object>>await this.accesscontrolService.getScreensByUser();
    this.screenList = response.body;
  }
  openReport(){
    let url=this.endpoint.ReportURL + "ProductCodelist";
    window.open(url, '_blank');
  }
  
}