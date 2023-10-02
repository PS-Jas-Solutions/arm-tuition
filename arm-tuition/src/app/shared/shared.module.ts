import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUpdateStudentComponent } from './components/create-update-student/create-update-student.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    CreateUpdateStudentComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
