import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private authService: AuthService) {
    this.form = this.fb.group({
      mail: ['', Validators.required],
      contrasenia: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loading = false;
  }

  onSend(event: Event) {
    this.loading = true;
    event.preventDefault();
    this.authService.login(this.form.value.mail, this.form.value.contrasenia);
    this.loading = false;
  }

  isLoading() {
    return this.loading;
  }
}
