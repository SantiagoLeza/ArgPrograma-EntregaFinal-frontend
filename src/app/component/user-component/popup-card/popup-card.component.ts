import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-popup-card',
  templateUrl: './popup-card.component.html',
  styleUrls: ['./popup-card.component.css']
})
export class PopupCardComponent implements OnInit {

  @Input() active: boolean = false;
  user: any;

  form: FormGroup;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.maxLength(30)]]
    });
  }

  async send(event: Event){
    if(this.form.valid){
      const value = this.form.value;
      await this.authService.addSection(this.user.id, value.titulo);
      this.fetchUser();
      this.form.reset();
      this.active = false;
      window.location.reload();
    }
    else{
      this.form.markAllAsTouched();
      alert("Ingrese un título válido");
    }
  }

  fetchUser() {
    this.authService.getUserByMail(this.router.url.split('/')[2]).subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit(): void {
    this.fetchUser();
  }

}
