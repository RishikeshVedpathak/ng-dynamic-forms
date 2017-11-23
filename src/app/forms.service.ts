import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class FormsService {

  constructor(private http: HttpClient){}
  
    getForms(api: string): Observable<any>{ 
      return this.http.get(api);   
    }

    toFormGroup(forms: any[] ) {
      let group: any = {};
  
      forms.forEach(form => {
        group[form.key] = form.required ? new FormControl(form.value || '', Validators.required) : new FormControl(form.value || '');
      });
      return new FormGroup(group);
    }

}
