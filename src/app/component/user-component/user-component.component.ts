import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

    userPaged: any;

    addingSection: boolean = false;
    addingContent: boolean = false;
    editingSection: boolean = false;
    editingContent: boolean = false;
    loaded: boolean = false;

    sectionEdited: number | null = null;
    contentAdding: number | null = null;

    constructor(private authService: AuthService, private router: Router) {
      this.loaded = false;
      this.fetchUser = this.fetchUser.bind(this);
    }
  
    fetchUser = () => {
      const email = this.router.url.split('/')[2];
      this.authService.getUserByMail(email).subscribe(user => {
        this.userPaged = user;
        this.loaded = true;
      });
    }

    ngOnInit(): void {
      this.fetchUser();
    }
    
    getUserPaged() {
      if(this.userPaged == undefined){
        this.fetchUser();
      }
      return this.userPaged;
    }

    isLogged() {
      return this.authService.isLogged();
    }

    logout() {
      this.authService.logout();
    }

    getImage() {
      try{
        if(this.userPaged.urlImagen != undefined){
          return this.userPaged.urlImagen;
        }
        else{
          return "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png";
        }
      }
      catch{
      }
    }

    isAuthor() {
      return this.isLogged() && this.authService.getMailLogged() === this.userPaged?.mail;
    }

    isAddingContent(){
      console.log( this.addingContent);
    }
}
