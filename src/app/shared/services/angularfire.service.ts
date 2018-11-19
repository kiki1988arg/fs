import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class AngularfireService {

  constructor(private db: AngularFirestore) { }
  addDocument(message: IMessage) {
    this.db.collection('items').add(message).then(function() {
      console.log('Document successfully written!');
  });
  }
}
