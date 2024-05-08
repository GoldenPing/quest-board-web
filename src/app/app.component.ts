import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chronos } from './chronos.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  isAdmin = localStorage.getItem('admin') === '1' 
  public appPages = [
    { title: 'Home', url: '/home', icon: 'mail' },
    { title: 'Planification', url: '/planification/planification-list', icon: 'mail' },
    { title: 'Imprévues', url: '/imprevue/imprevue-list', icon: 'mail' },
    { title: 'Mes Imprévues', url: '/my-imprevue/imprevue-list', icon: 'mail' },
  ];
  
  constructor(private router: Router, private chronos : Chronos) {
  
  }
  ngOnInit(): void {
   if(localStorage.getItem('username')){
     this.chronos.startTimeout()
   }
  }

  onClick(){
    localStorage.removeItem('id_user')
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    localStorage.removeItem('admin')
    this.router.navigate(['login'])
  }
}
