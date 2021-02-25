import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BitcoinService } from '../../services/bitcoin.service';

@Component({
  selector: 'app-static-page',
  templateUrl: './static-page.component.html',
  styleUrls: ['./static-page.component.scss']
})
export class StaticPageComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }
  marketPrice = null
  trance = null
  avgBlock=null

  ngOnInit(): void {
    this.loadStatics()
  }
  loadStatics(){
    this.loadAvgBlock()
    this.loadMarketPrice()
    this.loadTrance()
  }
  async loadMarketPrice() {
    let marketData = await this.bitcoinService.getMarketPrice()
    const marketPrice = this.convertData(marketData)
    console.log('marketPrice:', marketPrice)
    this.marketPrice = marketPrice
  }
  async loadTrance(){
    let tranceData = await this.bitcoinService.getConfirmedTransactions()
    this.trance = this.convertData(tranceData)
    console.log(' this.trance :',  this.trance )
  }
  async loadAvgBlock(){
    let avgData = await this.bitcoinService.getAvgBlock()
    this.avgBlock = this.convertData(avgData)
  }
  private convertData(data) {
    const newData = data.values.slice(0, 10)
    const convertData = newData.map(value => {
      const newDate = new Date(value.y / 1000)
      let date = moment(newDate).format('MMM DD')
      return [date, value.x]
    })
    return convertData
  }
}
