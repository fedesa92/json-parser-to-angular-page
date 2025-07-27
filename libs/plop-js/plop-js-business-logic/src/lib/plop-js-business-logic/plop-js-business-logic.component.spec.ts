import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlopJsBusinessLogicComponent } from './plop-js-business-logic.component';

describe('PlopJsBusinessLogicComponent', () => {
  let component: PlopJsBusinessLogicComponent;
  let fixture: ComponentFixture<PlopJsBusinessLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlopJsBusinessLogicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlopJsBusinessLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
