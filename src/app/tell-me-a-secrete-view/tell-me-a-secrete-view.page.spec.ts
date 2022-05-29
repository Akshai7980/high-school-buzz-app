import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TellMeASecreteViewPage } from './tell-me-a-secrete-view.page';

describe('TellMeASecreteViewPage', () => {
  let component: TellMeASecreteViewPage;
  let fixture: ComponentFixture<TellMeASecreteViewPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TellMeASecreteViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TellMeASecreteViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
