import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KleinsendelbachWebsiteLibraryComponent } from './kleinsendelbach-website-library.component';

describe('KleinsendelbachWebsiteLibraryComponent', () => {
  let component: KleinsendelbachWebsiteLibraryComponent;
  let fixture: ComponentFixture<KleinsendelbachWebsiteLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KleinsendelbachWebsiteLibraryComponent]
    });
    fixture = TestBed.createComponent(KleinsendelbachWebsiteLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
