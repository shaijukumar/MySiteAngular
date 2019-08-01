import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteConfigListComponent } from './site-config-list.component';

describe('SiteConfigListComponent', () => {
  let component: SiteConfigListComponent;
  let fixture: ComponentFixture<SiteConfigListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteConfigListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteConfigListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
