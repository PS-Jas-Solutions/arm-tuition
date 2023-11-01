import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { StudentAddEditComponent } from '../student-add-edit/student-add-edit.component';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  displayedColumns = ['id', 'student_name', 'standard', 'student_phone_number', 'student_email', 'gaurdian_1_name', 'gaurdian_1_phone_number', 'actions'];
  dataSource: MatTableDataSource<UserData>;
  public pageSize = 5;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private readonly dialog: MatDialog) {
    const users: UserData[] = [];
    users.push(createNewUser());
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: any) {
    let filterValue = event.target.value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  openAddEditStudentDialog(): void {
    const dialogRef = this.dialog.open(StudentAddEditComponent, {
      data: { type: 'ADD' },
      backdropClass: 'popup'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

/** Builds and returns a new User. */
function createNewUser(): UserData {
  return {
    id: '1',
    student_name: 'Paul Raju',
    standard: 'X',
    student_phone_number: '9020777509',
    student_email: 'paulrj1994@gmail.com',
    gaurdian_1_name: 'K A Raju',
    gaurdian_1_phone_number: '9895424164',
    actions: []
  };
}

export interface UserData {
  id: string;
  student_name: string;
  standard: string;
  student_phone_number: string;
  student_email: string;
  gaurdian_1_name: string;
  gaurdian_1_phone_number: string;
  actions?: any[];
}