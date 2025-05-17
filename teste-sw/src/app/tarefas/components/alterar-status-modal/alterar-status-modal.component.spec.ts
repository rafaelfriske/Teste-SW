import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarStatusModalComponent } from './alterar-status-modal.component';

describe('AlterarStatusModalComponent', () => {
  let component: AlterarStatusModalComponent;
  let fixture: ComponentFixture<AlterarStatusModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlterarStatusModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterarStatusModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
