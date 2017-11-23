import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [FormsService]
})
export class DynamicFormComponent implements OnInit {

  @Input() inputForm: any;
  form: FormGroup;
  payLoad = '';

  constructor(private formsService: FormsService) { }

  ngOnInit() {
    this.form = this.formsService.toFormGroup(this.inputForm);
    debugger;
  }
  ngOnChanges() {
    this.form = this.formsService.toFormGroup(this.inputForm);
    debugger;
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
  get isValid() {
    return this.form.controls[this.inputForm.key].valid; 
  }
}
