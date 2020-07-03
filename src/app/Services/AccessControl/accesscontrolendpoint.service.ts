import { Injectable } from '@angular/core';
import { EndPointsService } from '@app/Services/end-point.services';

@Injectable({
  providedIn: 'root'
})
export class AccesscontrolendpointService {

  getscreensaccessURL : string = null;
  getscreenaccessURL : string = null;
  postaccesscontrolinfoURL : string = null;

  getUAMainListURL:string=null;
  getUAMainDetailURL:string=null;
  getscreenaccessmultiple:  string = null;
 

  constructor(endpoint: EndPointsService) { 
    //Basic URL
    let apiHostingURL = endpoint.apiHostingURL;

    //Access Control URL
    
    this.getscreensaccessURL = apiHostingURL + "authandaccesscontrol/screensaccess";

    //Access Control URL
    this.getscreenaccessURL = apiHostingURL + "authandaccesscontrol/screenaccess";

    this.getscreenaccessmultiple = apiHostingURL + "authandaccesscontrol/screenaccessmultiple";


    //Use this for screen access
    this.postaccesscontrolinfoURL = apiHostingURL + "authandaccesscontrol/getaccesscontrolinfo";

    this.getUAMainListURL=apiHostingURL+"api/UserAdministration/mainList";

    this.getUAMainDetailURL=apiHostingURL+"api/UserAdministration/mainDetail"
   
  }
}
