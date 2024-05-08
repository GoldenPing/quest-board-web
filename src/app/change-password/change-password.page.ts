import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ChangePasswordService } from './change-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {


   passwordMatchValidator: ValidatorFn = (control: AbstractControl): {[key: string]: any} | null => {
    const password = control.get('password');
    const confirm = control.get('confirm');
    console.log(password && confirm && password.value !== confirm.value ? { 'passwordMismatch': true } : null);

    // Vérifie si les champs "password" et "confirm" ont la même valeur
    return password && confirm && password.value !== confirm.value ? { 'passwordMismatch': true } : null;
  };

  passform : FormGroup = this.formBuilder.group({
    password : ['',Validators.required],
    confirm: ['',[Validators.required, this.passwordMatchValidator]]
  })

  constructor(
    private formBuilder : FormBuilder,
    private changePassService : ChangePasswordService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  async onSubmit(){
    if (this.passform.valid) {

     const user = await this.changePassService.post(this.passform.value.confirm)
      this.router.navigate(['/home'])
    }
  }

  onChange(){
    const password = this.passform.get('password');
    const confirm = this.passform.get('confirm');

    if (password && confirm && password.value !== confirm.value) {
      confirm.setErrors({ passwordMismatch: true });
    } else {
      if (confirm) {
        confirm.setErrors(null);

      }
    }
  }

}
