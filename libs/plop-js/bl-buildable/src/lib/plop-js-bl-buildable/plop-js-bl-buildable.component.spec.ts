import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlopJsBlBuildableComponent } from './plop-js-bl-buildable.component';

describe('PlopJsBlBuildableComponent', () => {
  let component: PlopJsBlBuildableComponent;
  let fixture: ComponentFixture<PlopJsBlBuildableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlopJsBlBuildableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlopJsBlBuildableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
