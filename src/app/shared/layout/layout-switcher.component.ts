import { Component, OnInit, OnDestroy } from '@angular/core';
import { config } from '@app/core/smartadmin.config';
import { LayoutService } from '@app/core/services/layout.service'
import { Subscription } from 'rxjs';
import { NotificationService } from '@app/core/services';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'sa-layout-switcher',
  templateUrl: './layout-switcher.component.html'
})
export class LayoutSwitcherComponent implements OnInit, OnDestroy {
  isActivated: boolean;
  smartSkin: string;
  store: any;
  private sub: Subscription;

  constructor(public layoutService: LayoutService,
    private notificationService: NotificationService,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.layoutService.subscribe((store) => {
      this.store = store;
    });
    this.store = this.layoutService.store;
  }

  ngOnDestroy() {
    // this.sub.unsubscribe()
  }


  onToggle() {
    this.isActivated = !this.isActivated
  }


  onSmartSkin(skin) {
    this.layoutService.onSmartSkin(skin)
  }


  onFixedHeader() {
    this.layoutService.onFixedHeader()
  }


  onFixedNavigation() {
    this.layoutService.onFixedNavigation()
  }


  onFixedRibbon() {
    this.layoutService.onFixedRibbon()
  }


  onFixedPageFooter() {
    this.layoutService.onFixedPageFooter()
  }


  onInsideContainer() {
    this.layoutService.onInsideContainer()
  }


  onRtl() {
    this.layoutService.onRtl()
  }


  onMenuOnTop() {
    this.layoutService.onMenuOnTop()
  }


  onColorblindFriendly() {
    this.layoutService.onColorblindFriendly()
  }


  factoryReset() {
    this.layoutService.factoryReset()
  }

  showLogoutPopup() {
    this.notificationService.smartMessageBox(
      {
        title:
          "<i class='fa fa-sign-out txt-color-orangeDark'></i>Do you want to Logout <span class='txt-color-orangeDark'><strong></strong></span> ?",
        content:
          "You will be redirecting to login page...",
        buttons: "[No][Yes]"
      },
      ButtonPressed => {
        if (ButtonPressed == "Yes") {
          localStorage.removeItem("UserInfo");
          this.router.navigate(["/auth/login"]);
        }
      }
    );
  }
}