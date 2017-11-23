import { Component } from '@angular/core';
import { FormsService } from './forms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [FormsService]
})
export class AppComponent {
  forms: any[] = [];
  selectedForm: any[] = [];
  selectedFormIndex: number = 0;
  apiUrl: string = "https://api.myjson.com/bins/1c5lbb";
  constructor(private formsService: FormsService) {
  }

  ngOnInit() {
    this.getForms(this.apiUrl);
  }

  getForms(api: string): void {
    this.forms = [];
    this.formsService.getForms(api).subscribe(forms => {
      this.forms = forms;
      this.selectedForm = this.forms[0];
    });
  }

  loadNewForm(index: number): void {
    this.selectedForm = this.forms[index];
    this.selectedFormIndex = index;
  }

  jsonForm(): string {
    return JSON.stringify(this.forms);
  }

  isSelected(index: number): boolean {
    return this.selectedFormIndex === index ? true : false;
  }
}
