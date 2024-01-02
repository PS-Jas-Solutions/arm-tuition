import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUpdateStudentComponent } from './components/create-update-student/create-update-student.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateUpdateStudentComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
