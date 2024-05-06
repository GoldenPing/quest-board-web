import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Planification', url: '/planification/planification-list', icon: 'mail' },
    { title: 'Imprévues', url: '/imprevue/imprevue-list', icon: 'mail' },
    { title: 'Mes Imprévues', url: '/my-imprevue/imprevue-list', icon: 'mail' },
  ];
  
  constructor() {}
}
