import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Chronos } from '../chronos.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  showError = false
  loginform: FormGroup = this.formBuilder.group({
    name_user: ["",Validators.required],
    mdp_user: ["",Validators.required]

  })
  constructor(
    private formBuilder : FormBuilder,
    private loginService : LoginService,
    private router: Router,
    private activitedRoute: ActivatedRoute,
    private appComponent : AppComponent
  ) { }

  ngOnInit() {
    this.activitedRoute.queryParams.subscribe(params => {
      // Vérifiez si le paramètre "error" est présent dans les paramètres de la requête
      const error = params['error'];
      if (error) {
        // Faites ce que vous devez faire avec le paramètre d'erreur
        this.showError = true
      }
    });
  }

  async onSubmit(){
    const user = await this.loginService.auth(this.loginform.value.name_user, this.loginform.value.mdp_user)
    console.log(user);

    if(user){

      if(user.first_connexion){
        console.log('first connexion');
        this.router.navigate(['change-password'])
      }else{
        await this.router.navigate(["/home"])
        if ( localStorage.getItem('admin') === '1' ) {
  

          this.appComponent.appPages.push({ title: 'Imprévues', url: '/imprevue/imprevue-list', icon: 'mail' })
        }else{
          if (this.appComponent.appPages.length > 3) {
            this.appComponent.appPages.pop()
          }
        }
      }
    }
  }

}
