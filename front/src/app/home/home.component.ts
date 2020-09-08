import { Component, OnInit } from '@angular/core';
import { UserHService } from '../user-h.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Array<any>=[]
  constructor(private _userService: UserHService) { }

  ngOnInit(){
    this._userService.getUser()
      .subscribe(
        res => {
          this.users = res
          this.users = [...this.users]
          console.log(this.users)
        },
        err => console.log(err)
      )
  }

}
