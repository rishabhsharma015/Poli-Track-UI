import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowuidComponent } from './showuid.component';

describe('ShowuidComponent', () => {
  let component: ShowuidComponent;
  let fixture: ComponentFixture<ShowuidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowuidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowuidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
