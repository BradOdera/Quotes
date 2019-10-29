import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicQuotesComponent } from './music-quotes.component';

describe('MusicQuotesComponent', () => {
  let component: MusicQuotesComponent;
  let fixture: ComponentFixture<MusicQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MusicQuotesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});