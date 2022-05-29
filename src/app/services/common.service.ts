import { Injectable } from '@angular/core';
import { ModalController, ToastController, Platform, NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    public modalController: ModalController,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    public navController: NavController,
    public platform: Platform,
    public route: ActivatedRoute,
    public router: Router,
  ) { }

                // --- Alert to show failed message ---
                async showAlertFailed(msg) {
                  const alert = await this.alertCtrl.create({
                    cssClass: 'my-custom-class',
                    // header: '❗️ Failed ❗️ ',
                    header: ' Failed ',
                    message: msg,
                    mode: 'ios',
                    buttons: ['Okay']
                  });
              
                  await alert.present();
                }

                // --- Alert to show success message ---
                async showAlertSuccess(msg) {
                  const alert = await this.alertCtrl.create({
                    cssClass: 'my-custom-class',
                    // header: ' ✅ Success ✅ ',
                    header: ' Success ',
                    message: msg,
                    mode: 'ios',
                    buttons: ['Okay']
                  });
              
                  await alert.present();
                }
}
