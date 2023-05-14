import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  form: FormGroup;
  pass = {first: "", last: ""};
  passValid = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      country: ['', ],
      city: ['', ],
      urlImage: ['', ],
    });

    this.form.addValidators(this.checkPassword);
  }

  onSubmit(event: Event){
    if(this.form.valid){
      this.authService.signup(
        this.form.get('email')?.value,
        this.form.get('password')?.value,
        this.form.get('firstName')?.value,
        this.form.get('lastName')?.value,
        this.form.get('country')?.value,
        this.form.get('city')?.value,
        this.form.get('urlImage')?.value
      );
    }
    else{
      this.form.markAllAsTouched();
    }
  }

  checkPassword: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const password = this.form.get('password')?.value;
    const confirmPassword = this.form.get('confirmPassword')?.value;

    if (password === confirmPassword) {
      this.passValid = true;
    }
    else{
      this.passValid = false;
    }

    return password.valueOf === confirmPassword.valueOf ? null : { notSame: true };
  }
}
