import { Injectable } from '@angular/core';
import { AccesscontrolendpointService } from '@app/Services/AccessControl/accesscontrolendpoint.service';
import { HttpResponse, HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AccessControlResponse } from '@app/Models/AccessControl/AccessControlResponse';
import { ScreenAccessRequest, Accesscontrolrequest } from '@app/Models/AccessControl/RequestModel';
import { UserInfo } from '@app/Models/UserInfo';
import { BehaviorSubject } from 'rxjs';
import { validateConfig } from '@angular/router/src/config';


@Injectable({
  providedIn: 'root'
})
export class AccesscontrolService {

  userInfo: UserInfo;
  acesscontrolrequest: Accesscontrolrequest;
  public UserId: string = "";
  public ScreenId: string = "";
  public toggleHeaderItem = new BehaviorSubject<boolean>(false);
  public UserDepartment = new BehaviorSubject<string>("All Depts");
  public UserName = new BehaviorSubject<string>("");
  public User_Name : string ="";
  public Dept_Id: string="";
  public ClearDetailView = new BehaviorSubject<boolean>(false);
  public P_Super: number=0;


  constructor(private endpointService: AccesscontrolendpointService, private httpClient: HttpClient) {
    this.acesscontrolrequest = new Accesscontrolrequest();

    // let userInfo = JSON.parse(localStorage.getItem("UserInfo"))[0];
    // this.UserId = userInfo.UserId;
    // this.UserName = userInfo.Username;
    // this.UserDepartment = userInfo.Department;
    // this.P_Super = userInfo.Super_User;   
    // this.Dept_Id =  userInfo.Dept_Id;    
    //let screenId = this.route.snapshot.data['screenId'];
  }

  async getScreensByUser() {
    //   const httpOptions = {
    //     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    //     observe: 'response' as 'response'
    //  }

    let userInfo = this.getLoginUserInfo();
    this.UserId=userInfo.UserId;
    this.UserName = userInfo.Username;
    this.UserDepartment = userInfo.Department;
    this.P_Super = userInfo.Super_User;   
    this.Dept_Id =  userInfo.Dept_Id;
    this.User_Name = userInfo.Username;

    return await this.httpClient.get<any>(this.endpointService.getscreensaccessURL + "?userId=" + this.UserId, { observe: 'response' }).toPromise();

  }  

  async getScreensaccessByUser(ScreenId: number): Promise<HttpResponse<number>>{
    let userInfo = this.getLoginUserInfo();
    this.UserId=userInfo.UserId;
    this.UserName = userInfo.Username;
    this.UserDepartment = userInfo.Department;
    this.P_Super = userInfo.Super_User;   
    this.Dept_Id =  userInfo.Dept_Id;    
    this.User_Name = userInfo.Username;
    
    return await this.httpClient.get<number>(this.endpointService.getscreenaccessURL+ "?userId=" + this.UserId + "&ScreenId=" + ScreenId, { observe: 'response' }).toPromise();
  }

  async getMultipleScreensaccessByUser(ScreenId: number)
   {
    return await this.httpClient.get<any>(this.endpointService.getscreenaccessmultiple+ "?userId=" + this.UserId + "&ScreenId=" + ScreenId, { observe: 'response' }).toPromise();   
  }     

  async getScreenAccessByUser(screenId: number): Promise<HttpResponse<Object>> {

    this.userInfo = this.getLoginUserInfo();
    this.acesscontrolrequest.userId = this.userInfo.UserId;
    this.acesscontrolrequest.userDepartment = this.userInfo.Department;
    this.acesscontrolrequest.userType = this.userInfo.Super_User == 1 ? "superuser" : "normaluser";
    this.acesscontrolrequest.screenId = screenId;
    const response = await this.httpClient.post<HttpResponse<AccessControlResponse>>(this.endpointService.postaccesscontrolinfoURL, this.acesscontrolrequest, { observe: 'response' }).toPromise();

    //const response = await this.httpClient.get<HttpResponse<AccessControlResponse>>(this.endpointService.getscreenaccessURL, this.acesscontrolrequest, { observe: 'response' }).toPromise();

    return response;
  }

  getLoginUserInfo() {
    return JSON.parse(localStorage.getItem("UserInfo"))[0];
  }

  //Main List
   

}