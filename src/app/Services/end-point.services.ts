import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { JsonApiService } from '@app/core/services';
import URLconfig  from '../../assets/api/URLconfig.json';
import { HttpClient,HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class EndPointsService {
  url=URLconfig.test3
  apiHostingURL=this.url.API_Url;
  apiHostingUIURL=this.url.UI_Url;
  ReportURL=this.url.Report_Url;
  LogoUrl=this.url.Logo_Url;
  LoginUrl = this.apiHostingURL + "api/Auth/UserLogin"
  SetPageList=[50,100,250,500]
  
      constructor(private jsonApiService:JsonApiService,private http:HttpClient) {
            //   this.url=URLconfig.endPointLive
            // this.apiHostingURL=this.url.API_Url;
         
            // this.apiHostingUIURL=this.url.UI_Url;
            // this.ReportURL=this.url.Report_Url;
            // this.LogoUrl=this.url.Logo_Url;
            // this.LoginUrl = this.apiHostingURL + "api/Auth/UserLogin"
      
         }
}