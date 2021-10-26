import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

interface Tag {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.scss'],
})
export class DialogComponentComponent implements OnInit {
  data = {
    position: 1,
    title: '',
    description: '',
    tag: 'feature',
    date: new Date(),
    count: 0,
    votes: false
  }
  tags: Tag[] = [
    {value: 'feature', viewValue: 'Feature'},
    {value: 'tech', viewValue: 'Tech'}
  ];
  duplicate: boolean = false;
  submitted: boolean = false;
  constructor(public dialogRef: MatDialogRef<DialogComponentComponent>,) { }

  ngOnInit(): void {
  }
  save(){
    this.submitted = true;
    this.duplicate = false;
    const data: any = JSON.parse(sessionStorage.getItem('taskData') || '[]');  
    this.data.position = data.length  + 1;
    this.data.date = new Date();
    if (data && data.length > 0)     {
      data.map((val: { title: any; }) => { 
        if (val.title === data.title) {
          this.duplicate = true;
        }
      });
    }
    data.push(this.data);
    if (!this.duplicate) {
      this.dialogRef.close(data);
    } else {
      this.submitted = false;
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
