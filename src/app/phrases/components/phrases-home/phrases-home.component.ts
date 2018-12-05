import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { MatDialog } from '@angular/material';
import { PhrasesCreateComponent } from '../phrases-create/phrases-create.component';

@Component({
  selector: 'app-phrases-home',
  templateUrl: './phrases-home.component.html',
  styleUrls: ['./phrases-home.component.css']
})
export class PhrasesHomeComponent implements OnInit {

  items: Observable<any[]>;
  constructor(db: AngularFirestore,
    public dialog: MatDialog) {
    this.items = db.collection('phrases', ref => ref.orderBy('Time', 'desc').limit(10)).valueChanges();
    console.log(this.items);
  }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(PhrasesCreateComponent, {
      width: '478px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
