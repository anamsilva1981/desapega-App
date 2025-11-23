import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormProductComponent } from './modal-form-product.component';

describe('ModalFormProductComponent', () => {
  let component: ModalFormProductComponent;
  let fixture: ComponentFixture<ModalFormProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFormProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalFormProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
