import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { categoriesData } from 'src/app/shared/helper/categories';
import { PhrasesAfsService } from '../../services/phrases-afs.service';

@Component({
  selector: 'app-phrases-create',
  templateUrl: './phrases-create.component.html',
  styleUrls: ['./phrases-create.component.css']
})
export class PhrasesCreateComponent implements OnInit {
  public categories: Array<string> = categoriesData;
  public selectedCategories: Array<string> = [];
  phrase: Iphrase = {} as Iphrase;
  phraseCreateForm = this.fb.group({
    Author: ['', Validators.required],
    Time: [''],
    Message: ['', [Validators.required, Validators.maxLength(255)]],
    Categories: [[], Validators.required]
  });
  constructor(private fb: FormBuilder,
    private phrasesAFS: PhrasesAfsService,
  ) { }

  ngOnInit() {

  }
  onSubmit() {
    this.phrasesAFS.addDocument(this.phraseCreateForm.value);


  }
  public onSizeChange(value) {
    this.selectedCategories = value;
  }
}
