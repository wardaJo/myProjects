import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMngStateComponent } from './test-mng-state.component';

describe('TestMngStateComponent', () => {
  let component: TestMngStateComponent;
  let fixture: ComponentFixture<TestMngStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestMngStateComponent]
    });
    fixture = TestBed.createComponent(TestMngStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
