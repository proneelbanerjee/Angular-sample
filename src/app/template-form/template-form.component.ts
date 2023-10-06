import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  @Input() initialData?: string;
  @Output() messageSent = new EventEmitter<string>();

  name: string = 'Message send';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => {
      this.name = message;
    });
  }

  sendMessage() {
    this.messageSent.emit(this.name);
    this.dataService.changeMessage(this.name);
  }
}
