import {Component, OnInit, Input} from '@angular/core';
import { UserService } from '@app/core/services/user.service';
import { LayoutService } from '@app/core/services/layout.service';

@Component({
  selector: 'sa-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.css']
})

export class LoginInfoComponent implements OnInit {
  @Input() opened = false;
  @Input() title: string;
  constructor(public us: UserService, private layoutService: LayoutService) {
  }

  ngOnInit() {  
  
  }

  toggle(){
    this.opened=!this.opened;
  }

  toggleShortcut() {
    this.layoutService.onShortcutToggle()    
  }
}
