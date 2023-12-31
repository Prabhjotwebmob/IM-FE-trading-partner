import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingPartnerComponent } from './trading-partner.component';

describe('TradingPartnerComponent', () => {
  let component: TradingPartnerComponent;
  let fixture: ComponentFixture<TradingPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradingPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
