import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  form: FormGroup;
  pass = {first: "", last: ""};
  passValid = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      country: ['', ],
      city: ['', ]
    });

    this.form.addValidators(this.checkPassword);
  }

  onSubmit(event: Event){
    
    if(this.form.valid){
      
    }
    else{
      this.form.markAllAsTouched();
    }
  }

  checkPassword: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const password = this.form.get('password')?.value;
    const confirmPassword = this.form.get('confirmPassword')?.value;

    console.log(password);
    console.log(confirmPassword);
    if (password === confirmPassword) {
      this.passValid = true;
    }
    else{
      this.passValid = false;
    }

    return password.valueOf === confirmPassword.valueOf ? null : { notSame: true };
  }
}
