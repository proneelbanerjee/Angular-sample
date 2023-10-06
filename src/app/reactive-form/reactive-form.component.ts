import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  @Input() initialData: string = '';
  @Output() messageSent = new EventEmitter<string>();

  form: FormGroup; // Initialize in the constructor

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.form = this.fb.group({
      name: [this.initialData, Validators.required]
    });
  }

  ngOnInit() {
    this.form.get('name')!.valueChanges.pipe(debounceTime(300)).subscribe(value => {
      this.messageSent.emit(value);
      this.dataService.changeMessage(value);
    });
  }

  sendMessage() {
    this.messageSent.emit(this.form.value.name);
    this.dataService.changeMessage(this.form.value.name);
  }
}

