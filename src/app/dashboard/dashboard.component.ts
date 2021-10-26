import { Component, OnInit } from '@angular/core';
import {ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogComponentComponent } from 'src/shared/dialog-component/dialog-component.component';

export interface taskData {
  title: string;
  position: number;
  description: number;
  tag: string;
  date: Date;
  count: number;
  votes: boolean;
}

const ELEMENT_DATA: taskData[] = [];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'title', 'description', 'tag', 'date', 'count', 'votes'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  originalData: any = this.appendTasks(JSON.parse(sessionStorage.getItem('taskData') || '[]'));
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponentComponent, {
      width: '550px',
      data: ''
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      this.appendTasks(result);
    });
  }
  constructor(public dialog: MatDialog) { }

  appendTasks(_data: any) {
    this.originalData = [];
    if(_data) {
      _data.map((val: any) => {
        this.originalData.push(val);
      });      
      this.dataSource = new MatTableDataSource(this.originalData);
      sessionStorage.setItem('taskData', JSON.stringify(this.originalData));
    }
  }
  ngOnInit(): void {
  }
  upVote(data: any, type: string) {
    if (data) {
      this.updateOriginalObject(data, type);
    }
  }
  updateOriginalObject(data: any, type: string) {
    if (this.originalData) {
      this.originalData.map((val: any) => {
        if (val.title === data.title) {
          val.votes = type  === 'down' ? false : true;
          val.count = type  === 'down' ? val.count - 1 : val.count + 1;
        }
      });
      sessionStorage.setItem('taskData', JSON.stringify(this.originalData));
    }
  }

}
