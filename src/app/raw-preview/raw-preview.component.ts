import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-raw-preview',
  templateUrl: './raw-preview.component.html',
  styleUrls: ['./raw-preview.component.css']
})
export class RawPreviewComponent implements OnInit {
  @Input() inputForm: any;
  rawJSON: string = "";
  constructor() { }

  ngOnInit() {
    this.rawJSON = JSON.stringify(this.inputForm);
  }
  ngOnChanges() {
    this.rawJSON = JSON.stringify(this.inputForm);
  }

}
