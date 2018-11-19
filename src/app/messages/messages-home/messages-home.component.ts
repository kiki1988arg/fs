import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { MessagesCreateComponent } from '../messages-create/messages-create.component';

@Component({
  selector: 'app-messages-home',
  templateUrl: './messages-home.component.html',
  styleUrls: ['./messages-home.component.css']
})
export class MessagesHomeComponent implements OnInit {
  items: Observable<any[]>;
  constructor(db: AngularFirestore,
    public dialog: MatDialog) {
    this.items = db.collection('items', ref => ref.orderBy('Time', 'desc').limit(10)).valueChanges();
  }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(MessagesCreateComponent, {
      width: '478px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
