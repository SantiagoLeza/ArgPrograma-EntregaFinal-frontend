import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-popup-add-content',
  templateUrl: './popup-add-content.component.html',
  styleUrls: ['./popup-add-content.component.css']
})
export class PopupAddContentComponent {
  @Input() active: boolean = false;
  @Input() seccion: any;
  user: any;

  form: FormGroup;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.maxLength(45)]],
      texto: ['', [Validators.required, Validators.maxLength(150)]],
      url_imagen: ['', [Validators.maxLength(150)]]
    });
  }

  async send(event: Event){
    if(this.form.valid){
      const value = this.form.value;
      await this.authService.addContent(this.seccion.id, value.titulo, value.texto, value.url_imagen);
      this.fetchUser();
      this.form.reset();
      this.active = false;
      window.location.reload();
    }
    else{
      this.form.markAllAsTouched();
      alert("Error");
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

  isActive() {
    console.log(this.active);
  }

}
