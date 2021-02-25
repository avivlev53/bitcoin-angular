import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { BitcoinService } from '../../services/bitcoin.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private userService:UserService,private bitcoinService:BitcoinService) { }
  user:User
  bitcoinRate:number

  async ngOnInit(): Promise<void> {
    this.user = this.userService.getUser()
    this.bitcoinRate = await this.bitcoinService.getRate()
  
  }
  get moneyBitcoin(){
   return this.user.coins * this.bitcoinRate 
  }

}
