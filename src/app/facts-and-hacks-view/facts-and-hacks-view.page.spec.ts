import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FactsAndHacksViewPage } from './facts-and-hacks-view.page';

describe('FactsAndHacksViewPage', () => {
  let component: FactsAndHacksViewPage;
  let fixture: ComponentFixture<FactsAndHacksViewPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FactsAndHacksViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FactsAndHacksViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
