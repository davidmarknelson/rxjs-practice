import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickRaceComponent } from './click-race.component';

describe('ClickRaceComponent', () => {
  let component: ClickRaceComponent;
  let fixture: ComponentFixture<ClickRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickRaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
