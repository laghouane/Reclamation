import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReclamationComponent } from './my-reclamation.component';

describe('MyReclamationComponent', () => {
  let component: MyReclamationComponent;
  let fixture: ComponentFixture<MyReclamationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyReclamationComponent]
    });
    fixture = TestBed.createComponent(MyReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
