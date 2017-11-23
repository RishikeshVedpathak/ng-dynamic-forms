import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent {

  @Input() question: any;
  @Input() form: FormGroup;
  get isValid() { 
    debugger;
    return this.form.controls[this.question.key].valid; 
  }

}
