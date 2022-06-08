import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWorklowComponent } from './list-worklow.component';

describe('ListWorklowComponent', () => {
  let component: ListWorklowComponent;
  let fixture: ComponentFixture<ListWorklowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWorklowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWorklowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
