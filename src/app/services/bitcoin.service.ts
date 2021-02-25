import { Injectable } from '@angular/core';
import axios from 'axios';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  private RATE_URL:string = 'https://blockchain.info/tobtc?currency=USD&value=1';
  private MARKET_URL:string =
    'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true';
  private TRADE_URL:string =
    'https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true';
  private AVG_BLOCK:string =
    'https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true';
  constructor(private storageService:StorageService) { }

  async getRate(coins=1)  {
    const rate = this.storageService.load('currRate');
    if (rate) return Promise.resolve(rate * coins);
    const res = await axios.get(this.RATE_URL);
    this.storageService.save('currRate', res.data);
    return res.data * coins;
  }
  
  async  getMarketPrice() {
    const marketPrice = this.storageService.load('marketPrice');
    if (marketPrice) return Promise.resolve(marketPrice);
    const res = await axios.get(this.MARKET_URL);
    this.storageService.save('marketPrice', res.data);
    return res.data;
  }
  
  async  getConfirmedTransactions() {
    // const marketPrice = this.storageService.load('Trans');
    // if (marketPrice) return Promise.resolve(marketPrice);
    const res = await axios.get(this.TRADE_URL);
    // this.storageService.save('Trans', res.data);
    return res.data;
  }
  
  async  getAvgBlock() {
    const avg = this.storageService.load('avgBlock');
    if (avg) return Promise.resolve(avg);
    const res = await axios.get(this.AVG_BLOCK);
    this.storageService.save('avgBlock', res.data);
    return res.data;
  }
}
