import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import {  NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  // standalone: true,
	// imports: [NgbCollapseModule],
})
export class AdminComponent {
  public isListMenuCollapsed = false;
  public isSocialMediaMenuCollapsed = false;
  public isGalleryMenuCollapsed = false;
  constructor(
    private offcanvasService: NgbOffcanvas,
    private readonly router: Router
    ) {}
  public showSidebar(sidebarContent: TemplateRef<any>) {
    this.offcanvasService.open(sidebarContent, { ariaLabelledBy: 'offcanvas-basic-title', panelClass: 'sidebar-offcanvas' }).result.then(
			(result) => {
				
			},
			(reason) => {
				
			},
		);
  }
  public gotoStudentList() {
    this.router.navigate(['admin/students']);
    this.offcanvasService.dismiss();
  }
}
