import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // api = 'https://portafolio-argentina-programa-springboot.onrender.com'
  api = "http://192.168.0.10:8080"

  constructor(private http: HttpClient, private router: Router) { }

  login(mail: string, contrasenia: string) {
    this.http.post(`${this.api}/usuarios/login`, {mail: mail, contrasenia: contrasenia})
      .subscribe((res: any) => {
        localStorage.setItem('userLogged', res);
        localStorage.setItem('mailLogged', res.mail);
        this.router.navigate([`/user/${res.mail}`]);
      }
    );
  }

  logout() {
    localStorage.removeItem('userLogged');
    localStorage.removeItem('mailLogged');
  }

  isLogged() {
    return localStorage.getItem('userLogged') !== null;
  }

  getMailLogged(){
    return localStorage.getItem('mailLogged');
  }

  signup(mail: string, contrasenia: string, nombre: string, apellido: string, pais: string, ciudad: string, urlImagen: string) {
    this.http.post(`${this.api}/usuarios/crear`, {mail: mail, contrasenia: contrasenia, nombre: nombre, apellido: apellido, pais: pais, ciudad: ciudad, urlImagen: urlImagen})
      .subscribe((res: any) => {
        if(res === null){
          alert("El usuario ya existe");
        }
        else{
          localStorage.setItem('userLogged', res);
          this.router.navigate([`/user/${res.mail}`]);
        }
      }
    );
  }

  getUserByMail(mail: string) {
    return this.http.get(`${this.api}/usuarios/traer/${mail}`);
  }

  async addSection(id: number, titulo: string) {
    return this.http.post(`${this.api}/seccion/crear`, {idUsuario: id, titulo: titulo})
      .subscribe((res: any) => {
      }
    );
  }

  editSection(id: number, titulo: string) {
    return this.http.put<any>(`${this.api}/seccion/editar/${id}?titulo=${titulo}`, {titulo});
  }

  async addContent(id_seccion: number, titulo: string, texto: string, url_imagen: string | null){
    return this.http.post(`${this.api}/contenido/crear`, {titulo: titulo, texto: texto, urlImagen: url_imagen, id_seccion: id_seccion})
      .subscribe((res: any) => {
      }
    );
  }
  
}
