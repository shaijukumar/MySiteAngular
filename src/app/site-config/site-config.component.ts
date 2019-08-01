import { Component, OnInit } from '@angular/core';
import { SiteConfig } from '../shared/site-config.model';
import { NgForm } from '@angular/forms';
import { SiteConfigService } from '../shared/site-config.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-site-config',
  templateUrl: './site-config.component.html',
  styleUrls: ['./site-config.component.css']
})
export class SiteConfigComponent implements OnInit {

  constructor(private service: SiteConfigService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  
  resetForm(form?: NgForm) {
    if (form != null){
      form.resetForm();
    }
      
    this.service.formData = {
      SiteConfigID: null,
      Key: "",
      Value: ''      
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.SiteConfigID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postSiteConfig(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putEmployee(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'Register');
      this.resetForm(form);
      this.service.refreshList();
    });

  }

}
