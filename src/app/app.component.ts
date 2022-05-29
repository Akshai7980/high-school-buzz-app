import { Component } from '@angular/core';
import { Platform , NavController } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public selectedIndex = 0;

  public appPages = [
    {
      title: 'About HSB',
      // url: '/settings',
      img: '../assets/image/1-side-menu.png'
    },
    {
      title: 'Mission & Vision',
      // url: '/settings',
      img: '../assets/image/2-side-menu.png'
    },
    {
      title: 'Privacy & Policy',
      // url: '/settings',
      img: '../assets/image/3-side-menu.png'
    },
    {
      title: 'Terms & Conditions',
      // url: '/settings',
      img: '../assets/image/4-side-menu.png'
    },
    {
      title: 'Contact',
      // url: '/settings',
      img: '../assets/image/5-side-menu.png'
    },
    {
      title: 'Report Abuse',
      // url: '/settings',
      img: '../assets/image/6-side-menu.png'
    },
    {
      title: 'Profile',
      // url: '/settings',
      img: '../assets/image/7-side-menu.png'
    },
    {
      title: 'Notification',
      // url: '/settings',
      img: '../assets/image/8-side-menu.png'
    },
    {
      title: 'Settings',
      // url: '/settings',
      img: '../assets/image/9-side-menu.png'
    },
    {
      title: 'Log Out',
      url: '/settings',
      img: '../assets/image/10-side-menu.png'
    },
  ];
  constructor(
    public navController: NavController,
    private common: CommonService,
    // private splashScreen: SplashScreen,
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  openPage(i: any) {
    const route = this.appPages[i].url;
    this.common.router.navigate([route]);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.CheckUserDetails();
      // this.splashScreen.hide();
    });
  }

  CheckUserDetails() {
    // this.storage.get('userInfo').then((val) => {
      // if (val) {
        // this.router.navigate(['tabs']);
        this.navController.navigateRoot('landing');
      // } else {
        // this.navController.navigateRoot('');
      // }
    // });
  }
}
