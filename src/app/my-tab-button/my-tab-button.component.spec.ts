import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyTabButtonComponent } from './my-tab-button.component';

describe('MyTabButtonComponent', () => {
  let component: MyTabButtonComponent;
  let fixture: ComponentFixture<MyTabButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTabButtonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyTabButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
