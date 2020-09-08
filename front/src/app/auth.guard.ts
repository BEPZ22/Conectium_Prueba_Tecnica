import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService,private _router: Router){}

  canActivate(): boolean{
    

    // let logged = true
    // this._authService.loggedIn()
    // .subscribe(
    //   res => {
    //     if(!res.logged){
    //       console.log("no entiendo" + res.logged)
    //       this._router.navigate(['/login'])
    //       logged = false
    //     }else{
    //       logged = true
    //     }

    //   },
    //   err => {
    //     console.log(err)
    //   }
    // )
    // return logged

    /**No deberia ser, ya que el _authService, 
     * el servicio envia una variable del tipo logged 
     * que dira si esta o no esta logueado 
     * 
     * La solucion de arriba tampoco es la deseada de hecho no funciona
     * no entendi como en Angular hacer la navegacion y utilizar bien los guards*/
    if(!this._authService.loggedIn()){
      this._router.navigate(['/login'])
      return false
    }else{
      return true
    } 

  }
  
}
