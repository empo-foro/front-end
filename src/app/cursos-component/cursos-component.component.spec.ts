import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosComponentComponent } from './cursos-component.component';

describe('CursosComponentComponent', () => {
  let component: CursosComponentComponent;
  let fixture: ComponentFixture<CursosComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
