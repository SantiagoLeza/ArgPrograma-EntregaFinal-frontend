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

  constructor(private fb: FormBuilder, private http: HttpClient, private authService: AuthService) {
    this.form = this.fb.group({
      mail: ['', Validators.required],
      contrasenia: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSend(event: Event) {
    event.preventDefault();
    
    this.authService.login(this.form.value.mail, this.form.value.contrasenia);
  }
}
