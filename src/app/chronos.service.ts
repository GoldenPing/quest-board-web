import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable(
    {
        providedIn:'root'
    }
)
export class Chronos {

    timeoutId : ReturnType<typeof setTimeout> | undefined;
    delais = 1000 * 60 * 5
    constructor(private router : Router){}

    startTimeout(){
        
        this.timeoutId = setTimeout(()=>{
            localStorage.removeItem('id_user')
            localStorage.removeItem('username')
            localStorage.removeItem('password')
            localStorage.removeItem('admin')
            this.router.navigate(['login'])
        },this.delais)
    }

    stopTimeout (){
        if(this.timeoutId){
            clearTimeout(this.timeoutId)
            this.timeoutId = undefined
        }
    }

    resetTimeout(){
        this.stopTimeout()
        this.startTimeout()
    }
}
