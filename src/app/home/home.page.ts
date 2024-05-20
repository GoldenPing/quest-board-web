import { Component, OnInit } from '@angular/core';
import { PlanificationService } from '../planification/planification.service';
import Planification from '../planification/planification.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  semaine : number = +this.dateWeek(new Date())
  daysOfWeek: Date[] = []
  calendar! : any
  plan?: Planification[]

  planOnCalendar = Array(7).fill([])

  constructor(private planificationService : PlanificationService) { }

  async ngOnInit() {
    this.defineDate()
    this.plan =await this.planificationService.getPlanfications()
    this.linkDatePlan()
  }



  onChangeSem(value:number){
    this.semaine = this.semaine + value

    if(this.semaine > 52){
      this.semaine = 1
    }
    if (this.semaine === 0) {
      this.semaine = 52
    }

    this.defineDate(value)
    this.planOnCalendar = Array(7).fill([])
    this.linkDatePlan();
    console.log(this.planOnCalendar);
    
  }

  defineDate( value: number = 0){
    this.daysOfWeek = []
    let debutsem=new Date()
    if (value !== 0) {
      const numSemaineActuell = this.dateWeek(debutsem)
      const deltaSemaine =  this.semaine - +numSemaineActuell
      debutsem.setDate(debutsem.getDate() + deltaSemaine * 7)

    }
    const debutJsem=debutsem.setUTCDate(debutsem.getUTCDate()-debutsem.getUTCDay())
    debutsem = new Date(debutJsem)


    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(debutsem);
      currentDate.setDate(debutsem.getDate() + i);
      this.daysOfWeek.push(currentDate);
    }

    this.calendar =    this.daysOfWeek.map(e => {
      const calendar = {
        "days" : e .getDate().toString().padStart(2, '0'),
        "month" : (e .getMonth() + 1).toString().padStart(2, '0'),
      }

      return calendar
     })

  }
// Calule du numéro de semaine
  dateWeek(a:Date) {
    var d = a ? new Date(a) : new Date();
    d.setHours(0,0,0,0);
    d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
    var w = new Date(d.getFullYear(), 0, 4);
    return ('0' + (1 + Math.round(((d.getTime() - w.getTime()) / 86400000 - 3 + (w.getDay() + 6) % 7) / 7))).slice(-2);
  }

  linkDatePlan(){

    for (const index in this.calendar) {
      const date = this.calendar[index].days + "/" + this.calendar[index].month

      if(this.plan){


        if(this.plan.filter(e=> e.date_plan === date).length > 0){
          this.planOnCalendar[+index] = this.plan.filter(e=> e.date_plan === date).map(plan => {

            let colorImprevue = ''
            if (plan.imprevues){

              colorImprevue =
              plan.imprevues.filter(e => e.peuDecaler_imp === 0).length > 0 ? 'danger' :
              plan.imprevues.filter(e => e.peuDecaler_imp === 1).length > 0 ? 'warning' :
              'success';

            }
            let colorParticipe = ''
            if(plan.participes){

              colorParticipe =
                plan.participes.filter(e => e.non_part === 1).length === 6 ? 'danger' :
                plan.participes.filter(e => e.non_part === 1).length >= 2 &&  plan.participes.filter(e => e.non_part === 1).length < 6 ? 'warning' :
                'success';

            }
            let finalColor = 'success'
            if(colorImprevue ==="danger" || colorParticipe === 'danger'){
              finalColor = 'danger'
            }else if (colorImprevue ==="warning" || colorParticipe ==='warning'){
              finalColor = 'warning'
            }

            return {...plan,color : finalColor}
          }
            )

        }
      }
    }


  }
}
