import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewProductComponent } from './modal-view-product.component';

describe('ModalViewProductComponent', () => {
  let component: ModalViewProductComponent;
  let fixture: ComponentFixture<ModalViewProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalViewProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalViewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
