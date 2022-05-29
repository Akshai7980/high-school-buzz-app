import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';

@Component({
  selector: 'app-tell-me-a-secrete',
  templateUrl: './tell-me-a-secrete.page.html',
  styleUrls: ['./tell-me-a-secrete.page.scss'],
})
export class TellMeASecretePage implements OnInit {

  secrete:string = '';
  isToggled: {[key: number]: boolean} = {};

  constructor(private common: CommonService,
    ) { }

  ngOnInit() {
    console.log('secrete:',this.secrete);
  }

  ToProceed () {
    if (this.secrete!='' && this.secrete!=undefined) {
      this.secrete = '';
      console.log('secrete:',this.secrete);
    } else {
      this.common.showAlertFailed('Please enter your secrete and click <strong> PROCEED </strong> .');
    }
  }

  MediaIcons(cat) {
    console.log('Category:',cat);
  }

  ToggleSubmit(type, i) {
    console.log("Toggled: " + type + this.isToggled[i], i);
  }

  ToEnterSubmission() {

  }

}
