import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModidierProduitComponent } from './page-modidier-produit.component';

describe('PageModidierProduitComponent', () => {
  let component: PageModidierProduitComponent;
  let fixture: ComponentFixture<PageModidierProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageModidierProduitComponent]
    });
    fixture = TestBed.createComponent(PageModidierProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
