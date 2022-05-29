import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BirthdayShoutOutDefaultPage } from './birthday-shout-out-default.page';

describe('BirthdayShoutOutDefaultPage', () => {
  let component: BirthdayShoutOutDefaultPage;
  let fixture: ComponentFixture<BirthdayShoutOutDefaultPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayShoutOutDefaultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BirthdayShoutOutDefaultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
