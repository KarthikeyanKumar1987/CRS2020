import { Injectable } from '@angular/core';

declare var $: any;

@Injectable()
export class NotificationService {

  constructor() {
  }

  smallBox(data, cb?) {
    $.smallBox(data, cb)
  }

  bigBox(data, cb?) {
    $.bigBox(data, cb)
  }

  smartMessageBox(data, cb?) {
    $.SmartMessageBox(data, cb)
  }

  smallMessageBox(title: string, msg: string, Success: boolean) {
    let msgColor = "";
    let iconText = "";

    if (Success) {
      msgColor = "#659265";
     iconText = "fa fa-check fa-2x fadeInRight animate";

    } else {
      msgColor = "#C46A69";
      iconText="fa fa-times fa-2x fadeInRight animated";
    }

    let data = {
      title: title,
      content: "<i class='fa fa-clock-o'></i> <i>" + msg + "</i>",
      color: msgColor,
      iconSmall: iconText,
      timeout: 4000
    }
    this.smallBox(data);
  }
}