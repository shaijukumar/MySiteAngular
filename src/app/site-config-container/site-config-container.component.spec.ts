import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteConfigContainerComponent } from './site-config-container.component';

describe('SiteConfigContainerComponent', () => {
  let component: SiteConfigContainerComponent;
  let fixture: ComponentFixture<SiteConfigContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteConfigContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteConfigContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
