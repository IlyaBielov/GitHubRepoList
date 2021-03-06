import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopReposComponent } from './top-repos.component';

describe('TopReposComponent', () => {
  let component: TopReposComponent;
  let fixture: ComponentFixture<TopReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
