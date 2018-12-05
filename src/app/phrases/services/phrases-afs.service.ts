import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class PhrasesAfsService {

  constructor(private db: AngularFirestore,
    private af: AngularFirestore) { }
  addDocument(phrase: Iphrase) {
    phrase.Time = new Date();
    this.db.collection('phrases').add(phrase).then(function() {
      console.log('Document successfully written!');
  });
  }
}
