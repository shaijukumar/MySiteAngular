import { Component, OnInit } from '@angular/core';
import { SiteConfig } from '../shared/site-config.model';

import { NgForm } from '@angular/forms';
import { SiteConfigService } from '../shared/site-config.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-site-config-list',
  templateUrl: './site-config-list.component.html',
  styleUrls: ['./site-config-list.component.css']
})
export class SiteConfigListComponent implements OnInit {

  constructor(private service: SiteConfigService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(items: SiteConfig) {
    this.service.formData = Object.assign({}, items);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.delete(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'EMP. Register');
      });
    }
  }

}
