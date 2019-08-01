import { Injectable } from '@angular/core';
import { SiteConfig } from './site-config.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SiteConfigService {

  readonly rootURL ="http://localhost:49962/api"
  list : SiteConfig[];
  formData : SiteConfig;

  constructor(private http : HttpClient) { }

  refreshList(){
    this.http.get(this.rootURL+'/SiteConfigs')
    .toPromise().then(res => this.list = res as SiteConfig[]);
  }

  postSiteConfig(formData : SiteConfig){
    debugger;
    return this.http.post(this.rootURL+'/SiteConfigs',formData);
     
   }

   putEmployee(formData : SiteConfig){
     
    return this.http.put(this.rootURL+'/SiteConfigs/'+formData.SiteConfigID,formData);
     
   }

   delete(id : number){
    
    return this.http.delete(this.rootURL+'/SiteConfigs/'+id);
   }
}
