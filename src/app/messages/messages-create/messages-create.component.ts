import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AngularfireService } from 'src/app/shared/services/angularfire.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-messages-create',
  templateUrl: './messages-create.component.html',
  styleUrls: ['./messages-create.component.css']
})

export class MessagesCreateComponent implements OnInit {

  mensaje: IMessage = {} as IMessage;
  messageCreateForm = this.fb.group({
    From: ['', Validators.required],
    To: ['', Validators.required],
    Time: [''],
    Message: ['', [Validators.required, Validators.maxLength(255)]]
  });
  constructor(private fb: FormBuilder,
    private afs: AngularfireService,
    private dialogRef: MatDialogRef<MessagesCreateComponent>) { }

  ngOnInit() {
  }
  onSubmit(message: IMessage) {
    this.mensaje.From = message.From;
    this.mensaje.To = message.To;
    this.mensaje.Time = new Date();
    this.mensaje.Message = message.Message;
    this.afs.addDocument(this.mensaje);
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
