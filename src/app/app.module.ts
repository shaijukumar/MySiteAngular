import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }  from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { SiteConfigComponent } from './site-config/site-config.component';
import { SiteConfigService } from './shared/site-config.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SiteConfigListComponent } from './site-config-list/site-config-list.component';
import { SiteConfigContainerComponent } from './site-config-container/site-config-container.component';
import { ContentManagementComponent } from './content-management/content-management.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentItemComponent } from './content-item/content-item.component';


@NgModule({
  declarations: [
    AppComponent,
    SiteConfigComponent,
    SiteConfigListComponent,
    SiteConfigContainerComponent,
    ContentManagementComponent,
    ContentListComponent,
    ContentItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [SiteConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
