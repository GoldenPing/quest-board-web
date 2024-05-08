import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Chronos } from '../chronos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  loginform: FormGroup = this.formBuilder.group({
    name_user: ["",Validators.required],
    mdp_user: ["",Validators.required]

  })
  constructor(
    private formBuilder : FormBuilder,
    private loginService : LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onSubmit(){
    const user = await this.loginService.auth(this.loginform.value.name_user, this.loginform.value.mdp_user)
    if(user){
      console.log(user);

      if(user.first_connexion){
        console.log('first connexion');
        this.router.navigate(['change-password'])
      }else{
        await this.router.navigate(["home"])
        window.location.reload()
      }
    }
  }

}
