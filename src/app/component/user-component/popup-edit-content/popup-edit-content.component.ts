import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-popup-edit-content',
  templateUrl: './popup-edit-content.component.html',
  styleUrls: ['./popup-edit-content.component.css']
})
export class PopupEditContentComponent {
  @Input() active: boolean = false;
  @Input() content: any;
  user: any;

  form: FormGroup;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      titulo: ['', [Validators.maxLength(45)]],
      texto: ['', [Validators.maxLength(150)]],
      url_imagen: ['', [Validators.maxLength(150)]]
    });
  }

  async send(event: Event){
    if(this.form.valid){
      const value = this.form.value;
      this.authService.editContent(this.content.idContenido, value.titulo, value.texto, value.url_imagen).subscribe(res => {
        this.fetchUser();
        this.form.reset();
        this.active = false;
        window.location.reload();
      }), () => {
        alert("Error al editar el contenido");
      }
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
