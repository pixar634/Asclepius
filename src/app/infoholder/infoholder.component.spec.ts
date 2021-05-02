import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoholderComponent } from './infoholder.component';

describe('InfoholderComponent', () => {
  let component: InfoholderComponent;
  let fixture: ComponentFixture<InfoholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
