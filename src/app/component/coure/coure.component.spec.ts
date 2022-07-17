import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoureComponent } from './coure.component';

describe('CoureComponent', () => {
  let component: CoureComponent;
  let fixture: ComponentFixture<CoureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
