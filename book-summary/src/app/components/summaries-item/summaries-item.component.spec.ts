import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesItemComponent } from './summaries-item.component';

describe('SummariesItemComponent', () => {
  let component: SummariesItemComponent;
  let fixture: ComponentFixture<SummariesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummariesItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummariesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
