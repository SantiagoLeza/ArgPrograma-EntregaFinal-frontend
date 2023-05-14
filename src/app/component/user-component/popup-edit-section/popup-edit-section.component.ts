import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-popup-edit-section',
  templateUrl: './popup-edit-section.component.html',
  styleUrls: ['./popup-edit-section.component.css']
})
export class PopupEditSectionComponent {
  @Input() active: boolean = false;
  @Input() seccion: any;
  user: any;

  form: FormGroup;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.maxLength(45)]]
    });
  }

  async send(event: Event){
    if(this.form.valid){
      const value = this.form.value;
      this.authService.editSection(this.seccion.id, value.titulo).subscribe(res => {
        this.active = false;
        this.fetchUser();
        this.form.reset();
        window.location.reload();
      }, err => {
        alert("Error al editar la sección");
      });
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
